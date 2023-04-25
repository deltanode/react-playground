var nameList = ["Emily", "Hannah", "Madison", "Ashley", "Sarah", "Alexis", "Samantha", "Jessica", "Elizabeth", "Taylor", "Lauren", "Alyssa", "Kayla", "Abigail", "Brianna", "Olivia", "Emma", "Megan", "Grace", "Victoria", "Rachel", "Anna", "Sydney", "Destiny", "Morgan"]

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)]
}

export function generateRandomMessage(length) {
  let result = ""
  // const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const characters = "abcdefghijklmnopqrstuvwxyz"
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export const findPrime = num => {
  let i,
    primes = [2, 3],
    n = 5
  const isPrime = n => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n))
    while (p <= limit) {
      if (n % p === 0) {
        return false
      }
      i += 1
      p = primes[i]
    }
    return true
  }
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2
    }
    primes.push(n)
    n += 2
  }
  return primes[num - 1]
}
