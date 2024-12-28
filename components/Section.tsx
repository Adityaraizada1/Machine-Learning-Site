// app/components/Section.tsx
import Card from './Card'

type SectionProps = {
    title: string
    cards: { title: string, description: string }[]
}

const Section = ({ title, cards }: SectionProps) => {
    return (
        <section className="my-12">
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </section>
    )
}

export default Section
