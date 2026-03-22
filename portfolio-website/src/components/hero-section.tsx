import TextType from '@/components/TextType'

export default function HeroSection() {
  return (
    <section className="bg-background sticky top-0 flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-2xl sm:max-w-4xl">
        <TextType
          className="max-w-2xl px-4 text-left text-6xl font-bold sm:max-w-4xl sm:text-9xl"
          cursorCharacter="|"
          text={['Kieran\nHawkins']}
          loop={false}
        />
      </div>
    </section>
  )
}
