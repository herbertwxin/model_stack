import MathRenderer from '@/components/MathRenderer';
import TableOfContents from '@/components/TableOfContents';

export default function SolowModelPage() {
  return (
    <>
      <TableOfContents />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Solow Growth Model</h1>
        <p className="text-xl text-gray-600">
          The neoclassical growth model with capital accumulation and technological progress.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Model Setup</h2>
          <p className="text-gray-700 mb-4">
            The Solow model describes the evolution of capital and output in an economy. 
            The production function is:
          </p>
          <MathRenderer math="Y(t) = F(K(t), A(t)L(t))" block />
          <p className="text-gray-700 mt-4">
            Where <MathRenderer math="Y" /> is output, <MathRenderer math="K" /> is capital, 
            <MathRenderer math="L" /> is labor, and <MathRenderer math="A" /> is technology.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assumptions</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">1.</span>
              <div>
                <strong>Cobb-Douglas Production:</strong>
                <MathRenderer math="Y = K^\\alpha (AL)^{1-\\alpha}" block />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">2.</span>
              <div>
                <strong>Labor Growth:</strong>
                <MathRenderer math="\\dot{L} = nL" block />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-900 font-semibold">3.</span>
              <div>
                <strong>Technological Progress:</strong>
                <MathRenderer math="\\dot{A} = gA" block />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Capital Accumulation</h2>
          <p className="text-gray-700 mb-4">
            The fundamental equation describes how capital evolves over time:
          </p>
          <MathRenderer math="\\dot{K} = sY - \\delta K" block />
          <p className="text-gray-700 mt-4">
            Where <MathRenderer math="s" /> is the savings rate and <MathRenderer math="\\delta" /> is the depreciation rate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Steady State Analysis</h2>
          <p className="text-gray-700 mb-4">
            In intensive form (per effective worker), we define <MathRenderer math="k = \\frac{K}{AL}" /> and <MathRenderer math="y = \\frac{Y}{AL}" />:
          </p>
          <MathRenderer math="y = k^\\alpha" block />
          <p className="text-gray-700 my-4">
            The evolution of capital per effective worker is:
          </p>
          <MathRenderer math="\\dot{k} = sk^\\alpha - (n + g + \\delta)k" block />
          <p className="text-gray-700 mt-4">
            At steady state, <MathRenderer math="\\dot{k} = 0" />, which gives us:
          </p>
          <MathRenderer math="k^* = \\left(\\frac{s}{n + g + \\delta}\\right)^{\\frac{1}{1-\\alpha}}" block />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Golden Rule</h2>
          <p className="text-gray-700 mb-4">
            The Golden Rule capital stock maximizes consumption per capita:
          </p>
          <MathRenderer math="\\frac{\\partial c^*}{\\partial k^*} = 0 \\Rightarrow \\alpha (k^{GR})^{\\alpha-1} = n + g + \\delta" block />
          <p className="text-gray-700 mt-4">
            This yields the Golden Rule capital stock:
          </p>
          <MathRenderer math="k^{GR} = \\left(\\frac{\\alpha}{n + g + \\delta}\\right)^{\\frac{1}{1-\\alpha}}" block />
        </section>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Insights</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Higher savings rates lead to higher steady-state capital and output</li>
          <li>• The model predicts conditional convergence across countries</li>
          <li>• Long-run growth depends entirely on technological progress</li>
          <li>• The Golden Rule provides a welfare benchmark for optimal savings</li>
        </ul>
      </div>
      </div>
    </>
  );
}