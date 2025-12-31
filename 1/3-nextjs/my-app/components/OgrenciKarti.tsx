// components/OgrenciKarti.tsx
interface Props {
    ad: string;
    not: number;
}

export default function OgrenciKarti({ ad, not }: Props) {
    return (
        <div className="border p-4">
            <h2 style={{
                color: not >= 50 ? "green" : "red"
            }}>{ad}</h2>
            <p>Ortalama: {not}</p>
        </div>
    );
}