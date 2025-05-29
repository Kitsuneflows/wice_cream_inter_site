'use client';
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export const FormSection = ({ onValidated }: { onValidated: (id: number) => void }) => {
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", age: "", telephone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkAlreadyPlayed = async (email: string) => {
    const { data } = await supabase.from("participants").select("id").eq("email", email);
    return data && data.length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.first_name || !form.last_name || !form.email || !form.age || !form.telephone) {
      setError("Tous les champs sont obligatoires.");
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Adresse mail invalide.");
      setLoading(false);
      return;
    }
    if (await checkAlreadyPlayed(form.email)) {
      setError("Cet email a déjà participé !");
      setLoading(false);
      return;
    }
    // On fait un insert qui retourne l'id (grâce à .select("id"))
    const { data, error: insertError } = await supabase
      .from("participants")
      .insert([
        {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          age: Number(form.age),
          telephone: form.telephone,
        }
      ])
      .select("id");

    if (insertError || !data || !data[0]?.id) {
      setError("Erreur lors de l'enregistrement. Réessaie.");
      setLoading(false);
      return;
    }
    setLoading(false);
    // Remonte l'id vers le composant parent
    console.log("Row créée avec id :", data[0].id);

    onValidated(data[0].id);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/85 rounded-2xl shadow-md p-6 flex flex-col gap-4 max-w-md mx-auto mt-6">
      <div className="flex flex-row gap-2">
        <input name="first_name" placeholder="Prénom" className="flex-1 w-6 rounded-lg px-4 py-3 border text-black" value={form.first_name} onChange={handleChange} disabled={loading} autoComplete="given-name" />
        <input name="last_name" placeholder="Nom" className="flex-1 w-6 rounded-lg px-4 py-3 border text-black" value={form.last_name} onChange={handleChange} disabled={loading} autoComplete="family-name" />
      </div>
      <input name="email" placeholder="Email" className="rounded-lg px-4 py-3 border text-black" type="email" value={form.email} onChange={handleChange} disabled={loading} autoComplete="email" />
      <div className="flex gap-2">
        <input name="age" placeholder="Âge" className="flex-1 rounded-lg px-4 w-6 py-3 border text-black" type="number" value={form.age} onChange={handleChange} disabled={loading} min={1} max={120} />
        <input name="telephone" placeholder="Téléphone" className="w-6 flex-1 rounded-lg px-4 py-3 border text-black" type="tel" value={form.telephone} onChange={handleChange} disabled={loading} autoComplete="tel" />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <button type="submit" disabled={loading} className="bg-gradient-to-l from-yellow-200 via-pink-200 to-purple-200 text-gray-800 rounded-full py-3 font-semibold text-lg shadow-md transition mt-1">
        {loading ? "Envoi..." : "Participer"}
      </button>
    </form>
  );
};
