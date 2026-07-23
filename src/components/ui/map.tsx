export const Map = () => {
  return (
    <div className="overflow-hidden rounded-3xl">
      <div className="relative bg-charcoal-400">
        <iframe
          title="Карта"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6c03c21d1361bee60c2ae49acd67435a576f4da29fcd2978c8b3996150172f9&amp;source=constructor"
          className="h-100 md:h-80 w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  )
}
