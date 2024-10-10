"use server";

export const Jokes = async () => {
  const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    cache: "no-store",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to get jokes");
  }

  const jokes = await response.json();
  return jokes;
};
