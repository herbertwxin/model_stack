import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <h1 className="text-7xl font-black text-gray-900 mb-2 tracking-tight">
              Model Stack
            </h1>
          </div>
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            Theoretical Macroeconomic Models
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive resource for understanding complex macroeconomic models through 
            detailed mathematical derivations and economic insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/models" 
              className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Models
            </Link>
            <Link 
              href="/blogs" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Read Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Mathematical Rigor</h3>
            <p className="text-gray-600">
              Complete mathematical derivations with step-by-step explanations for all economic models and theorems.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
            <p className="text-gray-600">
              Comprehensive explanations that bridge theoretical concepts with practical economic applications.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
            <p className="text-gray-600">
              From basic supply-demand models to advanced DSGE frameworks, covering all major macroeconomic theories.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Models Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Models</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'IS-LM Model',
              'Solow Growth Model', 
              'Ramsey-Cass-Koopmans Model',
              'Real Business Cycle Model'
            ].map((model) => (
              <div key={model} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{model}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive mathematical treatment with economic insights.
                </p>
                <Link href="/models" className="text-gray-900 font-medium text-sm hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
