import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh]">
      {/* Personal Introduction Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed text-left">
            I am Herbert Xin, currently a PhD candidate in Economics at University of Oregon. 
            This website also serves as a blog and repo for my personal project Model Stack, 
            a directory for macroeconomics models.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/models" 
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
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

      {/* Research Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">Research</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-left">
            My current research focuses on interaction between monetary and fiscal policy.
          </p>
        </div>
      </section>

      {/* Popular Models Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-left">Model Stack</h2>
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
