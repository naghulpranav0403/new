// import React, { useState } from 'react';
// import './Apply.css';
// import Socialhire from './Socialhire1.png';

// const Apply = () => {
//   const [name, setName] = useState('');
//   const [file, setFile] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const fileName = file?.name || 'No file uploaded';
//     alert(`Application Submitted!\nName: ${name}\nResume Uploaded: ${fileName}`);

//     setName('');
//     setFile(null);
//   };

//   return (
//     <>
//     <div className="app1">
//     <div className="apply-job">
//       <div className="apply1">
//         <form onSubmit={handleSubmit} className='apply3'>
//           <header className="apply2">
//             <img src={Socialhire} className="logo3" alt="Logo" />
//           </header>
//           <div className="apply4">
//             <label className="ll" id="name-label" htmlFor="name">
//               Enter Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={name}
//               placeholder="Enter Your Name"
//               onChange={(e) => setName(e.target.value)}
//               required
//               />
//           </div>
//           <div className='apply4'>
//             <label htmlFor="myFile">
//               Upload Your Resume
//             </label>
//             <input
//               type="file"
//               id="myFile"
//               name="filename"
//               onChange={(e) => setFile(e.target.files[0])}
//               required
//             />
//           </div>
//           <div className="apply4">
//             <button type="submit" className="submit-button1">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
//               </>
//   );
// }

// export default Apply;
import React, { useState } from 'react';
import './Apply.css';
import { useNavigate } from 'react-router-dom'; 
import Socialhire from './Socialhire1.png';

const Apply = () => {
  const [name, setName] = useState('');
  const [qualification, setQualification] = useState('');
  const [aboutYourself, setAboutYourself] = useState('');
  const [reasonForApplying, setReasonForApplying] = useState('');
  const [whyHireYou, setWhyHireYou] = useState('');
  const [employmentType, setEmploymentType] = useState('full-time');
  const [availableTime, setAvailableTime] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => { 
    e.preventDefault();
    const fileName = file?.name || 'No file uploaded';
    alert(`Application Submitted!\nName: ${name}\nQualification: ${qualification}\nAbout Yourself: ${aboutYourself}\nReason for Applying: ${reasonForApplying}\nWhy Should We Hire You: ${whyHireYou}\nEmployment Type: ${employmentType}\nAvailable Time: ${availableTime}\nResume Uploaded: ${fileName}`);

    setName('');
    setQualification('');
    setAboutYourself('');
    setReasonForApplying('');
    setWhyHireYou('');
    setEmploymentType('full-time');
    setAvailableTime('');
    setFile(null);
    navigate('/')
  };

  return (
    <div className="app1">
      
        <div className="apply1">
          <form onSubmit={handleSubmit} className='apply3'>
            <header className="apply2">
              <img src={Socialhire} className="logo3" alt="Logo" />
            </header>
            <div className="apply4">
              <label className="ll" id="name-label" htmlFor="name">
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="apply4">
              <label htmlFor="qualification">
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={qualification}
                placeholder="Enter Your Qualification"
                onChange={(e) => setQualification(e.target.value)}
                required
              />
            </div>
            <div className="apply4">
              <label htmlFor="aboutYourself">
                About Yourself 
              </label>
              <input
                id="aboutYourself"
                name="aboutYourself"
                value={aboutYourself}
                placeholder="Write about yourself"
                onChange={(e) => setAboutYourself(e.target.value)}
                required
                
              />
            </div>
            <div className="apply4">
              <label htmlFor="reasonForApplying">
                What Made You Apply for This Job? 
              </label>
              <input
                id="reasonForApplying"
                name="reasonForApplying"
                value={reasonForApplying}
                placeholder="Explain why you are applying"
                onChange={(e) => setReasonForApplying(e.target.value)}
                required
             
              />
            </div>
            <div className="apply4">
              <label htmlFor="whyHireYou">
                Why Should We Hire You? 
              </label>
              <input
                id="whyHireYou"
                name="whyHireYou"
                value={whyHireYou}
                placeholder="Explain why we should hire you"
                onChange={(e) => setWhyHireYou(e.target.value)}
                required
            
              />
            </div>
            <div className="apply4">
              <label htmlFor="employmentType">Employment Type:</label>
              <select
                id="employmentType"
                name="employmentType"
                value={employmentType}
                onChange={(e) => setEmploymentType(e.target.value)}
                required
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
              </select>
            </div>
            {employmentType === 'part-time' && (
              <div className="apply4">
                <label htmlFor="availableTime">Available Time:</label>
                <input
                  type="text"
                  id="availableTime"
                  name="availableTime"
                  value={availableTime}
                  placeholder="Enter your available time"
                  onChange={(e) => setAvailableTime(e.target.value)}
                  required
                />
              </div>
            )}
            <div className='apply4'>
              <label htmlFor="myFile">
                Upload Your Resume
              </label>
              <input
                type="file"
                id="myFile"
                name="filename"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>
            <div className="apply4">
              <button type="submit" className="submit-button1">
                Submit
              </button>
            </div>
          </form>
        </div>
      
    </div>
  );
}

export default Apply;