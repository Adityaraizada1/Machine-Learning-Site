// app/components/Card.tsx
type CardProps = {
    title: string
    description: string
}

const Card = ({ title, description }: CardProps) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card
