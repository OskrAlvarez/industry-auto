import { redirect } from "next/navigation";

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {('error' | 'success')} type - The type of message, either 'error' or 'success'.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to be encoded and added as a query parameter.
 * @returns {never} This function doesn't return as it triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}

export const convertToArray = (item: string[]) => {
  let arr = []
  if (typeof item === 'string') {
    arr = JSON.parse(item)
    return arr
  }
}

export const formatPrice = (price: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits:0
  
  }).format(price)
  
  return formatted
}
export const formatNumber = (price: number) => {
  const formatted = new Intl.NumberFormat().format(price)
  return formatted
}
