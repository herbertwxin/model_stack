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
