export const validationCheck = (email, password) => {
  const emailValidation =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!emailValidation) return "Please enter a valid email.";
  if (!passwordValidation) return "Please enter a strong password";

  return null; // Return null if both validations pass
};
