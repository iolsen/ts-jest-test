/**
 * Long function header comment
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
export function request(
  a: string,
  b: string | null,
  c: string,
): string {
  const url = a + b + c;

  thisIsNotDefinedAndWillThrow();

  let headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  headers = {
    ...headers,
  };

  const options = {
    headers,
  };

  return "whatever";
}
