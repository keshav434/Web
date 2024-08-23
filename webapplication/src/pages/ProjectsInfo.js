import loanimage from "../images/pic.png"
import loanimage1 from "../images/loan1.png"
import loanimage2 from "../images/Loan2.png"
import loanimage3 from "../images/Loan3.png"
import loanimage4 from "../images/Loan4.png"
import loanimage5 from "../images/Loan5.png"
import fitness from "../images/fitness.png"
import eco from "../images/eco.png"
import ecoimage1 from "../images/image.png"
import ecoimage2 from "../images/eco2.png"
import ecoimage3 from "../images/code.png"
import mp1 from "../images/mp1.png"
import mp2 from "../images/mp2.png"
import mp3 from "../images/mp3.png"
import tsaimage from "../images/TSA.png"
import tsa1 from "../images/tas1.png"
import tsa2 from "../images/tas2.png"
import tsa3 from "../images/tas3.png"
import tm6 from "../images/tm6.png"
import tm1 from "../images/tm1.png"
import tm2 from "../images/tm2.png"
import tm4 from "../images/tm4.png"
import tm5 from "../images/tm5.png"
import fd from "../images/fd2.png"
import fd1 from "../images/fd.png"
import fd2 from "../images/fd1.png"



const data = {
    projectData: [
      {
        id: 1,
        img: loanimage, // Make sure this path is valid
        name: 'Loan Failure Prediction',
        type: '[+] ML / ANALYSIS',
        subtitle: 'Analysing the data and identifying bias',
        additionals: [
          {
            overview:"\In this project I developed an AI model for Rahuri Finance company to predict the likelihood of loan default using historical data collected over 28 years.\n\nI was also suppose to find out any bias that could to against varoius attributes that could impact the loan decision. The overall goal of this assignment is to develop a systematic plan to analyze the data and determine the different biases present the dataset. Following this, a reflective piece on the ethical implications of some of the possible biases is also required.",
            Project:(
            <>
            This project was developed as part of the Data Analysis module's final project at the University of Hull. The project provided an invaluable opportunity to deepen my understanding of data analysis techniques and their real-world applications. Throughout this project, I gained hands-on experience in handling large datasets, which required meticulous attention to data cleaning and preparation.
            <br/><br />
            This project was developed as part of the Data Analysis module's final project at the University of Hull. The project provided an invaluable opportunity to deepen my understanding of data analysis techniques and their real-world applications. Throughout this project, I gained hands-on experience in handling large datasets, which required meticulous attention to data cleaning and preparation. I learned how to effectively use Python libraries like Pandas and NumPy to manipulate and analyze data, ensuring it was ready for more advanced modeling techniques.
            </>
            ),
            working: (
              <>
                <strong>Data Understanding and Planning:</strong> The initial phase involved a thorough understanding of the dataset, followed by strategic planning of the necessary steps before diving into exploration.
                <br/><br/>
                <strong>Data Preprocessing:</strong> This included handling missing values and performing critical preprocessing tasks such as discretizing attributes like A-levels and age. Discretization was aimed at improving the model's accuracy by transforming continuous variables into categorical ones, making them more suitable for analysis.
                <br/><br/>
                <strong>Feature Engineering:</strong> Relevant features were engineered by refining the data to extract only the most pertinent information, enhancing the model's predictive capabilities.
                <br/><br/>
                <strong>Data Encoding:</strong> All categorical data was encoded into a binary format, ensuring that the dataset was in a suitable form for machine learning algorithms to process effectively. 
                <br/><br/>
                <strong>ML Model Creation:</strong> Various machine learning models were developed, including Decision Tree, Naive Bayes, Support Vector Machine (SVM), Multilayer Perceptron (MLP) and Random Forest. 
                <br/><br/><img src={loanimage3} alt="Model Creation" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'block' }} />

                <strong>Hyperparameter Tuning:</strong> Each model's performance was improved through hyperparameter tuning, adjusting parameters such as the number of trees in the Random Forest, the depth of the Decision Tree, and the SVM kernel, to find the best set of parameters for optimal performance.
                <br/><br/>
                
                <strong>K-Methoids Clustering (Find Bias):</strong> K-medoids clustering was employed to further analyze the data and identify patterns within clusters. It was implemented bacause it  is less sensitive to outliers and more robust in handling noise in the data.
                <img src={loanimage5} alt="Model Creation" style={{ width: '50%', maxWidth: '600px', margin: '0 auto', marginBottom: '20px',display: 'block' }} />
                <strong>Association Rule Mining (Find Bias):</strong> Association rule mining is a powerful technique for discovering relationships between items in a dataset. In this analysis, we applied the Apriori algorithm to understand patterns that influence loan payment failure. 

                <img src={loanimage2} alt="Model Creation" style={{ width: '100%', maxWidth: '600px', margin: '0 auto',  marginBottom: '20px', display: 'block'}} />

                <strong>Conclusion:</strong> Subsequent clustering and final association rule mining confirmed and refined these insights, emphasizing the need for careful consideration of attributes like gender in the loan decision process to avoid biases. Also MPL is considered the best model for prediction with an accuracy of 77%.

              </>
            ),
            
            tools:'Python, Scikit-learn, Pandas, NumPy,Matplotliv, Association rule mining, Colab',
            addimg1:loanimage1,
            
          }
            ]
      },

      {
        id: 2,
        img: fitness, // Make sure this path is valid
        name: 'MyMentalPal',
        type: '</> Front-end',
        subtitle: 'A student mental health assisting website ',
        additionals: [
          {
            overview:'........................',
            Project:'..........................',
            working:'..........................',
            tools:'.............................',
            addimg1:mp1,
            addimg2:mp2,
            addimg3:mp3,
          }
        ]
      },

      {
        id: 3,
        img: eco, // Make sure this path is valid
        name: 'E-commerce',
        type: '</> Software',
        subtitle: 'Developing an e-commerce application',
        additionals: [
          {
            overview:'......................',
            Project:'..........................',
            working: (
              <>
               
                
                
                <img src={ecoimage3} alt="Model Creation" style={{ width: '100%', maxWidth: '600px', margin: '0 auto',  marginBottom: '20px', display: 'block'}} />

                
              </>
            ),
            tools:'React.js, Node.js and Mongodb',
            addimg1:ecoimage1,
            addimg2:ecoimage2,
            addimg3:null,
          }
        ]
      },
      
      
      {
        id: 4,
        img: tsaimage, // Make sure this path is valid
        name: 'Twitter Sentimental Analysis',
        type: '[+] ML / ANALYSIS',
        subtitle: 'Analysing the twitter data',
        additionals: [
          {
            overview:'......................',
            Project:'..........................',
            working: (
              <>
               
                
                
                

                
              </>
            ),
            tools:'Python, Pandas, NumPy, Tensowflow, Keras',
            addimg1:tsa1,
            addimg2:tsa2,
            addimg3:tsa3,
          }
        ]
      },
      

      {
        id: 5,
        img: tm6, // Make sure this path is valid
        name: 'Titanic Survival Prediction',
        type: '[+] ML / ANALYSIS',
        subtitle: 'Analysing the historical data of Titanic ship',
        additionals: [
          {
            overview:'......................',
            Project:'..........................',
            working: (
              <>
               
                
               <img src={tm5} alt="Model Creation" style={{ width: '100%', maxWidth: '600px', margin: '0 auto',  marginBottom: '20px', display: 'block'}} />
                

                
              </>
            ),
            tools:'Python, Seaborn, Matplotlib, Pandas, NumPy',
            addimg1:tm1,
            addimg2:tm2,
            addimg3:tm4,
          }
        ]
      },

      {
        id: 6,
        img: fd, // Make sure this path is valid
        name: 'Mood Eat',
        type: '</> Front-end',
        subtitle: 'Creating online food application pages',
        additionals: [
          {
            overview:'......................',
            Project:'..........................',
            working: (
              <>
               
                                

                
              </>
            ),
            tools:'React, Props, Redux, Routes, HTML, CSS',
            addimg1:fd2,
            addimg2:fd1,
            addimg3:null,
          }
        ]
      },
      
      // Add more projects as needed
    ],
  };
  
  export default data;
  