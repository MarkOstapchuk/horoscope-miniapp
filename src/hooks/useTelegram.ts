const tg = Telegram?.WebApp

export function useTelegram() {
  tg.ready()
  tg.expand()
  const backButton = tg.BackButton
  return { backButton }
}