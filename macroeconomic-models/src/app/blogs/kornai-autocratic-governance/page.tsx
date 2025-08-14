import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kornai (1979) Framework on Autocratic Governance - Model Stack',
  description: 'A comment on Kornai (1979) where I found similarities between socialist firms and autocratic local governments',
};

export default function KornaiComment() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            Political
          </span>
          <span className="text-xs text-gray-500">2024-02-05</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">8 min read</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kornai (1979) Framework on Autocratic Governance</h1>
        <p className="text-xl text-gray-600">
          A comment on Kornai (1979) where I found similarities between socialist firms and autocratic local governments
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 space-y-8">
        <div className="prose prose-gray max-w-none space-y-6 [&>p]:leading-relaxed [&>p]:pl-4 [&>p]:mb-4">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
          
          <p>After randomly came across Kornai's work on <em>"Resource-Constrained versus Demand-Constrained System" (1979)</em>, I realized it idea of soft/hard budget constraint displays a very neat framework to explain why autocratic government, especially the local government, often deviates from the demand of populace.</p>

          <p>In Kornai's work, he suggests that firms in socialist systems are only subject to soft budget constraints, i.e. the loss from investment does not damage the financial ability of the firm as it is owned by the state. Whereas in capitalist system, firms are immediately constrained by demands from the market, avoiding overly occupying social resources. In all circumstances, however, firms prioritize the most immediate constraint as it decides the survival of the firm. Thus, socialist firms suffer from "investment hunger", which relentlessly push for expansion regardless of actual market demands or the efficient use of resources to maintain state support till the exhaustion of resources, creating shortages.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Political Perspective</h2>
          
          <p>The detachment of firms from the market could certainly be undesirable. The detachment of local government from its residents, however, could raise more issues. In fact, any autocratic state should suffer from this issue more or less.</p>

          <p>As the nature of all autocratic system, local government officials are appointed by its superior, which means their responsibilities lies in achieving need of the superior. That need, however, does not necessary align with those from the residents. Put it into Karnai's framework, local government in autocratic state is delimited by the by its interaction with superior, while in democratic state, it is delimited by the interaction with local resident. This is an analogous of the resource/demand constraint faced by socialist/capitalist firms. Thus, just like socialist firms have no incentive to save resources, autocratic local governments have no incentive to benefit its residents.</p>

          <p>This lack of incentive occurs even when the central government's ultimate goal is to benefit the populace, as any policy relies on local government's implementation. With its hard constraint bounded by the populace, local government has to achieve the policy in a way that is generally agreed by the resident, where autocratic local governments, who's hard constraint is bounded by the central government, the policy can executed in any form, as long as it achieves the target.</p>

          <p>The aforementioned idea could be illustrated using my <strong>mushroom-shaped flowchart</strong>.</p>

          <div className="my-8 text-center">
            <img 
              src="/img/Mushroom.png" 
              alt="Mushroom Flowchart showing relationship between central government, local government, and populace" 
              className="max-w-full h-auto mx-auto rounded-lg shadow-sm"
              style={{ maxWidth: "70%" }}
            />
            <p className="text-sm text-gray-500 mt-2 italic">Mushroom-shaped flowchart illustrating autocratic governance structure</p>
          </div>

          <p>As one could see from the chart, the local government has the ruling power towards the people, while its primary responsibility is not tied with the needs of people. Local government only has a secondary responsibility towards the populace, i.e. the people influence the central government, which governs the local government.</p>

          <p>Such detachment between local government's responsibility and power has caused issues like the overly stringent lock-down policy during the COVID-19 era in China. The ultimate goal of the central government is to reduce the number of cases, which is certainly not wrong. However, since local government has no incentive to benefit its people, especially during such urgent event, it takes every measure at any cost to eliminate any possibility of COVID spreading, which, of course, includes killing dogs during break-in home COVID tests and leaving people that are suspect to be infected in Fangcang Hospital without any actual treatment. These measures obviously harms the welfare of general public and it does not matter as local government's primary responsibility, the one that decides the political career of local governor, is to fulfill the goal of the superior.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
          
          <p>It is sad to say this, but I think in any autocratic system, where the responsibility goes upward and power goes downward, faces the same problem. It shall be the intrinsic nature of autocratic systems, a steady state that any autocratic system converge to.</p>

        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Topics</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Political Economy</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Institutional Analysis</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Budget Constraints</span>
          <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">Governance Theory</span>
        </div>
      </div>
    </div>
  );
}