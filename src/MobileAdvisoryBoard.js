import React from 'react';
import './MobileAdvisoryBoard.css';
import SectionHeader from './SectionHeader';
import BoardMember from './BoardMember';

const IMAGES = {
  robert: require('./robert.jpg'),
  greger: require('./greger_head.jpg'),
  asha: require('./asha_head.jpg'),
  michelle: require('./michelle_head.jpg'),
  matt: require('./matt_head.jpg'),
  julieanna: require('./julieanna_head.jpg'),
};

const NAMES = {
  robert: 'Capt. Robert Atcheson',
  greger: 'Dr. Michael Greger, M.D. FACLM',
  asha: 'Dr. Asha Subramanian, M.D.',
  michelle: 'Dr. Michelle McMacken, M.D.',
  matt: 'Matt Ruscigno, M.P.H. R.D.',
  julieanna: 'Julieanna Hever, M.S. R.D. C.P.T.',
};

const ROBERT_PROFILE_TEXT = `I’m the last person you’d expect to be an advocate for healthy eating. I grew up on a farm in Iowa and, as a teenager, worked at my family’s restaurant serving up burgers and fried chicken. I spent four years in the Marines and over two decades in the Washington, D.C. police force before retiring as Captain.
I never gave a darn about what I ate. Neither did anyone I knew:  My fellow officers lived on fast food, and my relatives back home didn’t eat any better.

But over time, what they ate caught up to them. My dad died of a heart attack at 69. My mom has type 2 diabetes and heart disease. Many of my colleagues struggled with their weight and blood pressure.

Nearing my fifties, I decided to make a change. I started eating more grains, beans, fruits and vegetables, and less meat. It was a total transformation, and now I feel better than ever. Ask anyone who knows me and they’ll tell you I can’t shut up about the power of a healthy diet to change your life.

We all deserve to feel that good. We all deserve a life free of diet-related disease. But too often, it feels like major food corporations want to give us the opposite. That’s why I'm a part of Balanced:  I believe that together, we can hold corporations accountable and persuade them to put our health above their pockets. Because that’s the way it ought to be.`;

const BIOS = {
  robert: ROBERT_PROFILE_TEXT,
  greger: 'Dr. Greger is a physician, New York Times bestselling author, and internationally recognized speaker on nutrition, food safety, and public health issues. A founding member and Fellow of the American College of Lifestyle Medicine, Dr. Greger is licensed as a general practitioner specializing in clinical nutrition. He is a graduate of the Cornell University School of Agriculture and Tufts University School of Medicine.',
  asha: `Dr. Asha Subramanian received her B.A. and M.A. in psychology with Honors and Distinction from Stanford University; her combined M.D./Master of Public Health degree from Oregon Health and Science University School of Medicine; and completed her family medicine residency at the University of Pittsburgh St. Margaret Hospital.
Dr. Subramanian also completed a fellowship in community health at Georgetown University Medical Center. Her professional interests include lifestyle medicine, health behavior change, and community health.`,
  michelle: `Michelle McMacken, MD, is a board-certified internal medicine physician and Assistant Professor of Medicine at NYU School of Medicine. An honors graduate of Yale University and Columbia University College of Physicians and Surgeons, she practices primary care, directs a weight management program, and teaches medical students and doctors-in-training at Bellevue Hospital Center in New York City.
In 2014, she received a two-year fellowship grant to develop an evidence-based nutrition curriculum for her faculty physician colleagues. Dr. McMacken has received the faculty ‘Teacher of the Year’ award three times and has been featured in several documentary films, in national academic nutrition conferences, and on popular nutrition-related websites and podcasts. She is a council member for the True Health Initiative, a coalition of health experts from around the world committed to educating on evidence-based, proven principles of lifestyle as medicine.`,
  matt: `Matt Ruscigno, MPH, RD is a Registered Dietitian with a nutritional science degree from Penn State University and a graduate degree in public health nutrition from Loma Linda University.
Matt is the co-author of No Meat Athlete with Matt Frazier and Appetite for Reduction with Isa Moskowitz and is the past-Chair of the Vegetarian Group of the Academy of Nutrition and Dietetics. He lives in Los Angeles, CA where he operates Nutrinic, a plant-based nutrition center focused on CVD prevention.`,
  julieanna: `Julieanna Hever, M.S., R.D., C.P.T. is a Registered Dietitian who has been in private practice in Los Angeles since 2005, specializing in weight management, disease prevention and management, and sports nutrition. Julieanna authored  A Physician’s Guide to Plant-Based Diets, in the Permanente Medical Journal, The Vegiterranean Diet, and The Complete Idiot’s Guide to Plant-Based Nutrition.
She is the co-author of the cookbook, The Complete Idiot's Guide to Gluten-Free Vegan Cooking and is the nutrition columnist for VegNews Magazine. She is the host of the wellness talk show series What Would Julieanna Do? on Z Living Network, has given a TEDx talk, and was recently featured on The Dr. Oz Show, The Steve Harvey Show, Reluctantly Healthy, The Marie Osmond Show, and Issues with Jane Velez-Mitchell.`,
};

const BOARD_MEMBERS_KEYS = [
  'robert',
  'greger',
  'michelle',
  'matt',
  'julieanna',
  'asha',
];

const BOARD_MEMBERS = BOARD_MEMBERS_KEYS.map(key => ({
  name: NAMES[key],
  picture: IMAGES[key],
  bio: BIOS[key],
}));

export default () => (
  <div id="MobileAdvisoryBoard_Container">
    <div id="MobileAdvisoryBoard_Header">
      <SectionHeader>ADVISORY BOARD</SectionHeader>
    </div>
    {BOARD_MEMBERS.map(b => <BoardMember key={b.name} {...b} />)}
  </div>
);
