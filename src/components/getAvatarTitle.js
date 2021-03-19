function getAvatarTitle(fullName) {
  const names = fullName.split(" ");
  const letters = (name) => name.charAt(0);

  return letters.join("");
}
