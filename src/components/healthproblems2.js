import React from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './navbar2';

function HealthProblems2() {
    const username = localStorage.getItem('username');
    if (!username) {
    return (
      <div id='main'>
        <p>Please sign in again.</p>
        <a href="/signin" className="quiz-button">
            Proceed to signin
          </a>
      </div>
    );
  }
  return (
    <div>
        
      <>
      <Navbar2 />
      
        
        <div className="main">
            
          <div className="heading">
            <h2>Health Problems</h2>
          </div>
          <div className="container">
            <div className="problem">
              <h3>Anxiety disorders</h3>
              <p>Anxiety disorders are a group of mental health disorders that includes generalized anxiety disorders, social phobias, specific phobias (for example, agoraphobia and claustrophobia), panic disorders, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder. Untreated, anxiety disorders can lead to significant impairment in people’s daily lives.</p>
              <p><Link to="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/anxiety-disorders" target="_blank" rel="noopener noreferrer">Visit</Link> for More information.</p>
            </div>
            <div className="problem">
              <h3>Behavioural and emotional disorders in children</h3>
              <p>Bipolar affective disorder is a type of mood disorder, previously referred to as ‘manic depression’. A person with bipolar disorder experiences episodes of mania (elation) and depression. The person may or may not experience psychotic symptoms. The exact cause is unknown, but a genetic predisposition has been clearly established. Environmental stressors can also trigger episodes of this mental illness.</p>
              <p><Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/behavioural-disorders-in-children" target="_blank" rel="noopener noreferrer">Visit</Link> for More information.</p>
            </div>
            <div className="problem">
              <h3>Depression</h3>
              <p>Depression is a mood disorder characterized by lowering of mood, loss of interest and enjoyment, and reduced energy. It is not just feeling sad. There are different types and symptoms of depression. There are varying levels of severity and symptoms related to depression. Symptoms of depression can lead to an increased risk of suicidal thoughts or behaviors.</p>
              <p><Link to="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/depression" target="_blank" rel="noopener noreferrer">Visit</Link> for More information.</p>
            </div>
            <div className="problem">
              <h3>Psychosis</h3>
              <p>People affected by psychosis can experience delusions, hallucinations, and confused thinking. Psychosis can occur in a number of mental illnesses, including drug-induced psychosis, schizophrenia, and mood disorders. Medication and psychological support can relieve, or even eliminate, psychotic symptoms.</p>
              <p><Link to="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/psychosis" target="_blank" rel="noopener noreferrer">Visit</Link> for More information.</p>
            </div>
            <div className="problem">
              <h3>Obsessive-compulsive disorder</h3>
              <p>Obsessive-compulsive disorder (OCD) is an anxiety disorder. Obsessions are recurrent thoughts, images, or impulses that are intrusive and unwanted. Compulsions are time-consuming and distressing repetitive rituals. Treatments include cognitive-behavioral therapy (CBT) and medications.</p>
              <p><Link to="https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/obsessive-compulsive-disorder" target="_blank" rel="noopener noreferrer">Visit</Link> for More information.</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default HealthProblems2;
