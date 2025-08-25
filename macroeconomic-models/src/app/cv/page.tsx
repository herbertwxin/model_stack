import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Herbert W. Xin',
  description: 'Curriculum Vitae of Herbert W. Xin - PhD Candidate in Economics',
};

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Wei (Herbert) Xin</h1>
            <p className="text-lg text-gray-600">PhD Candidate in Economics</p>
          </div>
          <div className="text-right text-gray-600">
            <p>+61-0431173921</p>
            <p>
              <a href="mailto:hxin@uoregon.edu" className="text-gray-600 hover:text-gray-900">
                hxin@uoregon.edu
              </a>
            </p>
            <p>
              <a 
                href="https://www.linkedin.com/in/herbert-xin-24170aa3/" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a 
                href="https://herbertwxin.github.io/" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                herbertwxin.github.io
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Education</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Doctor of Philosophy (Economics)</h3>
                  <p className="text-gray-600">University of Oregon, Eugene</p>
                </div>
                <p className="text-gray-600">Sep 2024 - Jun 2029</p>
              </div>
              <p className="text-gray-700">Research field in Macroeconomics</p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Master of Economic Analysis</h3>
                  <p className="text-gray-600">The University of Sydney, Sydney</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>83 WAM - 3.8 GPA</p>
                  <p>Jun 2022 - Dec 2023</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>Relevant courses:</strong> Empirical Macroeconomics Modelling (D), Topics in Bus. Cycle and Mon. Policy (D), 
                Advanced Macroeconomics (HD), Advanced Microeconomics (D), Econometric Application (D), Economic History (HD)
              </p>
              <p className="text-gray-700">
                <strong>Thesis:</strong> Monetary, Fiscal Policy and Disinflation (Supervisor: Prof. Christopher G. Gibbs)
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bachelor of Economics (Economics) & Bachelor of Science (Statistics)</h3>
                  <p className="text-gray-600">University of New South Wales, Sydney</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Distinction</p>
                  <p>Feb 2018 - Dec 2021</p>
                </div>
              </div>
              <p className="text-gray-700">
                <strong>Relevant courses:</strong> Microeconomics II (HD), Theory of Statistics (D), Several Variable Calculus (D), 
                Industry Consulting Project (D), Probability and Stochastic Process, Statistical Inference, Statistical Modeling and Computing, 
                Statistical Model in Social and Market Research
              </p>
            </div>
          </div>
        </section>

        {/* Publication */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Publication</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">The sacrifice ratio and active fiscal policy</h3>
                <p className="text-gray-600">with Christopher G. Gibbs (The University of Sydney)</p>
              </div>
              <div className="text-right text-gray-600">
                <p>2024</p>
                <p>Economic Letters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Professional Experience</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Graduate Employee</h3>
                  <p className="text-gray-600">University of Oregon</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Eugene, United States</p>
                  <p>Sep 2024 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Class taught: EC101 - Intro. Econ; EC201 - Intro. Micro</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Casual Academic</h3>
                  <p className="text-gray-600">The University of Sydney</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Camperdown, Australia</p>
                  <p>Feb 2024 - Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Teaching tutorials for ECON1002 Introductory Macroeconomics</li>
                <li>Hold consultation hours to answer questions from students</li>
                <li>Teaching Assistant for Prof. Mariano Kulish</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Research Assistant</h3>
                  <p className="text-gray-600">The University of Sydney</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Camperdown, Australia</p>
                  <p>Dec 2023 - July 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Research assistant for Dr. Jordi Vidal-Robert</li>
                <li>Use STATA to clean up the raw data gathered from various sources</li>
                <li>Use R to plot relevant information on maps</li>
                <li>Produce plots and tables for working papers</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Commercial Operation</h3>
                  <p className="text-gray-600">Albaugh LLC</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Suzhou, China</p>
                  <p>January 2022 - April 2022</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Managed order requests from the globe and prepared documentations for customs and transportation</li>
                <li>Managed order forecast and sent purchasing request to central planning</li>
                <li>Analyzed the flaws in current order processing system</li>
                <li>Streamlined the order fulfillment process by reducing process steps by 30%</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Industry Project Consultant</h3>
                  <p className="text-gray-600">Accenture Australia</p>
                </div>
                <div className="text-right text-gray-600">
                  <p>Barangaroo, Australia</p>
                  <p>September 2019 - November 2019</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Winner of Industry Consulting Project Pitch Fest 2019</li>
                <li>Given the requirement of the current client of Accenture in the telecommunication industry, helped the client to find a new business model to cater to disruptive technologies</li>
                <li>Conducted broad background researches on the telecommunication industry and built a smart MU-MIMO antenna system, allowing the client to fully utilize the new business model</li>
                <li>Analyzed and predicted the potential financial impact of the solution by utilizing data collected during researches and built data visualization for the presentation</li>
                <li>Demonstrated great problem solving, data analysis, research, and communication skills during the project</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Projects */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Personal Projects</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Macromim</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>
                  <a 
                    href="https://www.youtube.com/channel/UC-yDi0dCtK-pceROXmp5pyg" 
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Channel
                  </a>
                </li>
                <li>Creating animated introductory macroeconomics courses with animation engine Manim (The engine used by 3Blue1Brown)</li>
                <li>The goal is to give students an intuitive way to understand macroeconomics with a set of animations showing the moving of lines and equilibriums</li>
                <li>Written in Python and LaTeX</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Restriction Project</h3>
              <p className="text-gray-600 mb-2">UNSW, Sydney</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Given the data of water usage, temperature, rainfall, water prices and restriction detail from 1996 to 2011 to analyze the impact of current water restriction and justify whether a new restriction is needed</li>
                <li>Built a regression model which predicted the impact of temperature, rainfall, water prices and previous restrictions across different districts using Stata</li>
                <li>Predicted the possible economical impact of various water restriction policies using the model constructed</li>
                <li>Built comprehensive data visualization to help client understand the impact of current and future policies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Physician's Advice on Alcohol Consumption</h3>
              <p className="text-gray-600 mb-2">UNSW, Sydney</p>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>Given the data from the 1990 National Health Interview Survey core questionnaire and special supplements containing alcohol consumption, age, racial, and health data to estimate the effect of physician's advice on alcohol consumption</li>
                <li>Constructed CF-Tobit model to predict the effect of physician's advice, individual and socioeconomic factors on alcohol consumption using Stata</li>
                <li>Estimated the result where physician's advice lowers alcohol consumption by 14.35 drinks on average, which suggests physician's advice could be a better policy than alcohol taxes, considering it is much cheaper to implement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Technical Skills and Interests</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700"><strong>Languages:</strong> English, Chinese, Japanese</p>
            </div>
            <div>
              <p className="text-gray-700"><strong>Programming Languages:</strong> R, Dynare, MATLAB, STATA, Python, Julia, LaTeX, Mathematica, Linux, Markdown, Fortran</p>
            </div>
          </div>
        </section>

        {/* Additional */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Additional</h2>
          <p className="text-gray-700">Visa status: Graduate Working Visa (485)</p>
        </section>

        {/* Referees */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">Referees</h2>
          <div>
            <p className="font-semibold text-gray-900">Ash Marwah</p>
            <p className="text-gray-700">Manager, Strategy and Consulting</p>
            <p className="text-gray-700">Accenture Australia</p>
            <p className="text-gray-700">
              Email: <a href="mailto:ashwinmarwah125@hotmail.com" className="text-blue-600 hover:underline">ashwinmarwah125@hotmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}