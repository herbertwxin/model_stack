import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personal Introduction */}
            <section>
              <p className="text-base text-gray-600 leading-relaxed">
                I am Herbert Xin, currently a PhD candidate in Economics at University of Oregon. 
                This website also serves as a blog and repo for my personal project Model Stack, 
                a directory for macroeconomics models.
              </p>
            </section>

            {/* Office Hour */}
            <section className="bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Office Hour</h2>
              <div className="text-gray-700">
                <p className="text-sm text-gray-600 font-medium">Location:</p>
                <p className="text-base">Prince Lucien Campbell Hall (PLC) 821</p>
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Access</h2>
              <div className="space-y-3">
                <Link 
                  href="/cv" 
                  className="block p-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-900">Curriculum Vitae</span>
                    <span className="text-xs text-gray-500">→</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Education, experience, and publications</div>
                </Link>
                
                <Link 
                  href="/teaching" 
                  className="block p-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-900">Teaching</span>
                    <span className="text-xs text-gray-500">→</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Course materials and resources</div>
                </Link>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="space-y-2">
                <p>
                  <span className="text-sm text-gray-600 font-medium">Email:</span>{' '}
                  <a href="mailto:hxin@uoregon.edu" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                    hxin@uoregon.edu
                  </a>
                </p>
                <p>
                  <span className="text-sm text-gray-600 font-medium">LinkedIn:</span>{' '}
                  <a 
                    href="https://www.linkedin.com/in/herbert-xin-24170aa3/" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    herbert-xin
                  </a>
                </p>
                <p>
                  <span className="text-sm text-gray-600 font-medium">Website:</span>{' '}
                  <a 
                    href="https://herbertwxin.github.io/" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    herbertwxin.github.io
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Research Section */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Research</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                My current research focuses on interaction between monetary and fiscal policy.
              </p>
            </section>

            {/* Recent Publication */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Publication</h2>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">The sacrifice ratio and active fiscal policy</h3>
                <p className="text-sm text-gray-600">with Christopher G. Gibbs (The University of Sydney)</p>
                <p className="text-xs text-gray-500">Economic Letters, 2024</p>
              </div>
            </section>

            {/* Model Stack Preview */}
            <section>
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Model Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'IS-LM Model',
                  'Solow Growth Model', 
                  'Ramsey-Cass-Koopmans Model',
                  'Real Business Cycle Model'
                ].map((model) => (
                  <div key={model} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-base mb-2">{model}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Comprehensive mathematical treatment with economic insights.
                    </p>
                    <Link href="/models" className="text-sm font-medium text-gray-900 hover:underline">
                      Learn More <span className="text-xs text-gray-500">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
