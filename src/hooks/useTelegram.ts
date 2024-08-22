const tg = Telegram?.WebApp

export function useTelegram() {
  const backButton = tg.BackButton
  return { backButton }
}