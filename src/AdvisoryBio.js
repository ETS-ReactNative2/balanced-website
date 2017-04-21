import React from 'react';
import BodyText from './BodyText';
import './AdvisoryBio.css';

const BIOS = {
  greger: 'Dr. Greger is a physician, New York Times bestselling author, and internationally recognized speaker on nutrition, food safety, and public health issues. A founding member and Fellow of the American College of Lifestyle Medicine, Dr. Greger is licensed as a general practitioner specializing in clinical nutrition. He is a graduate of the Cornell University School of Agriculture and Tufts University School of Medicine.',
  asha: 'Dr. Asha Subramanian received her B.A. and M.A. in psychology with Honors and Distinction from Stanford University; her combined M.D./Master of Public Health degree from Oregon Health and Science University School of Medicine; and completed her family medicine residency at the University of Pittsburgh St. Margaret Hospital. Dr. Subramanian also completed a fellowship in community health at Georgetown University Medical Center. Her professional interests include lifestyle medicine, health behavior change, and community health.',
  michelle: 'Michelle McMacken, MD, is a board-certified internal medicine physician and Assistant Professor of Medicine at NYU School of Medicine.  An honors graduate of Yale University and Columbia University College of Physicians and Surgeons, she practices primary care, directs a weight management program, and teaches medical students and doctors-in-training at Bellevue Hospital Center in New York City. In 2014, she received a two-year fellowship grant to develop an evidence-based nutrition curriculum for her faculty physician colleagues. Dr. McMacken has received the faculty ‘Teacher of the Year’ award three times and has been featured in several documentary films, in national academic nutrition conferences, and on popular nutrition-related websites and podcasts. She is a council member for the True Health Initiative, a coalition of health experts from around the world committed to educating on evidence-based, proven principles of lifestyle as medicine.',
  matt: 'Matt Ruscigno, MPH, RD is a Registered Dietitian with a nutritional science degree from Penn State University and a graduate degree in public health nutrition from Loma Linda University. Matt is the co-author of No Meat Athlete with Matt Frazier and Appetite for Reduction with Isa Moskowitz and is the past-Chair of the Vegetarian Group of the Academy of Nutrition and Dietetics. He lives in Los Angeles, CA where he operates Nutrinic, a plant-based nutrition center focused on CVD prevention.',
};

export default ({selectedName}) => (
  <div id="AdvisoryBio_Container">
    <BodyText>{BIOS[selectedName]}</BodyText>
  </div>
);
