const compareDate = (a, b) => {
  let createdA = a.created_at;
  let createdB = b.created_at;

  let comparison = 0;
  createdA > createdB ? (comparison = -1) : (comparison = 1);
  return comparison;
};

const compareAuthor = (a, b) => {
  let createdA = a.author.toLowerCase();
  let createdB = b.author.toLowerCase();

  let comparison = 0;
  createdA > createdB ? (comparison = 1) : (comparison = -1);
  return comparison;
};

const comparePopular = (a, b) => {
  let createdA = a.points;
  let createdB = b.points;

  let comparison = 0;
  createdA > createdB ? (comparison = -1) : (comparison = 1);
  return comparison;
};

export { compareDate, compareAuthor, comparePopular }