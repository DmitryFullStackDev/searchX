export const content = [
  {
    category: 'about',
    link: 'https://www.linkedin.com/in/dmitry-yushkevich-a1576a219/',
    name: 'How I am?',
    excerpt:
      'Located in Poland, I am a technical writer and developer with a strong passion for crafting responsive, dynamic, and adaptable websites. With a keen eye for detail and a creative outlook, I am a problem solver, consistently striving for clarity, simplicity, and ingenuity in all my work.',
  },
  {
    category: 'about',
    link: 'https://www.linkedin.com/in/dmitry-yushkevich-a1576a219/',
    name: 'A summary of my technical abilities and passions.',
    excerpt: `HTML, CSS, JavaScript, React, Next, Remix, Nest, Express, GraphQL, Gatsby, View, 
    Documentation, UI/UX Design.`,
  },
  {
    category: 'jokes',
    link: 'https://www.rd.com/list/short-jokes/',
    name: '101 Short Jokes Anyone Can Remember',
    excerpt: ' For when you need a fast funny joke, here are some short jokes to get anyone giggling.',
  },
  {
    category: 'jokes',
    link: 'https://www.countryliving.com/life/entertainment/a36178514/hilariously-funny-jokes/',
    name: '80 Hilariously Funny Jokes 2023 - Funniest Jokes to Tell',
    excerpt:
      'Just try to keep a straight face at these one-liners for all ages. Adults and kids will laugh at these hilarious jokes.',
  },
  {
    category: 'jokes',
    link: 'https://parade.com/968634/parade/jokes-for-kids/',
    name: '200+ Funny Jokes for Kids - Parade',
    excerpt:
      "These funny jokes for kids are guaranteed to make them laugh. We've included clean and silly kids jokes with themes like funny birthdays",
  },
  {
    category: 'facts',
    link: 'https://www.rd.com/list/interesting-facts/',
    name: '125 Interesting Facts | Random Fun Facts That Will Wow You',
    excerpt:
      "Stop right there! You're about to learn some seriously interesting facts about science, history, and pop culture that will blow your mind.",
  },
  {
    category: 'facts',
    link: 'https://factsmgt.com/',
    name: 'FACTS Management: Elevating the Education Experience',
    excerpt:
      'FACTS provides tools and solutions to private K-12 schools that elevate the education experience for administrators, teachers, and families.',
  },
  {
    category: 'facts',
    link: 'https://parade.com/966564/parade/fun-facts/',
    name: '101 Fun Facts | Random, Interesting Facts To Blow Your ...',
    excerpt:
      "101 Fun Facts You Never Knew, Guaranteed to Totally Blow Your Mind. The tallest buildings, strange world records, cool movie info—we've got it ...",
  },

  {
    category: 'social',
    link: 'https://www.linkedin.com/in/dmitry-yushkevich-a1576a219/',
    name: 'LinkedIn',
    excerpt: 'Connect and share experiences',
  },
  {
    category: 'social',
    link: 'https://github.com/DmitryFullStackDev',
    name: 'GitHub',
    excerpt: 'View my projects and code.',
  },
]

export const categories = [...new Set(content.map(el => el.category))]
