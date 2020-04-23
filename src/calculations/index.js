const daysToHours = (amountOfDays) => amountOfDays * 24
const weeksToHours = (amountOfWeeks) => amountOfWeeks * daysToHours(7)
const monthsToHours = (amountOfMonths) => amountOfMonths * daysToHours(31)
const yearsToHours = (amountOfYears) => amountOfYears * daysToHours(365)

const parsers = {
  'day': daysToHours,
  'week': weeksToHours,
  'month': monthsToHours,
  'year': yearsToHours
}

const toHours = (consumables) => {
  try {
    const [, amount, unit] = consumables.match(/(\d+)\s(day|week|month|year)/)
    if (!unit)
      throw new Error(`Unknown time unit ${unit}`)
    return parsers[unit](parseInt(amount))
  } catch (Error) {
    return Number.NaN
  }
}

const travelTimeInHours = (distanceInMGTL, mgltPerHour) => distanceInMGTL / mgltPerHour

export const calculateStops = (distanceInMGTL, starshipMGLTPerHour, consumables) => {
  return Math.round(travelTimeInHours(distanceInMGTL, starshipMGLTPerHour) / toHours(consumables))
}


