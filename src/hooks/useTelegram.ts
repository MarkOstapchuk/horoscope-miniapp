const tg = Telegram?.WebApp

export function useTelegram() {
  const ready = () => tg.ready()
  const expand = () => tg.expand()


  const backButton = tg.BackButton
  return { backButton, ready, expand, isExpanded: tg.isExpanded }
}