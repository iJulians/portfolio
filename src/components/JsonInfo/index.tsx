export default function JsonInfo() {
    const data = {
        name: "Juliano Silveira",
        role: "Desenvolvedor FullStack Jr",
        location: "Brasil",
        experience: "1 ano e 3 meses",
        stack: ["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS"]
    }


    return (
        <div className="flex flex-col items-center justify-center bg-[#14141e] py-10 px-20 perspective-origin-bottom-right w-full border-t-2 border-t-blue-500/50 rounded-lg">

            <div className="flex w-full mb-10 justify-start">
                <div className="rounded-lg bg-[#ff5f56] w-3 h-3 mr-2"></div>
                <div className="rounded-lg bg-[#ffbd2e] w-3 h-3 mr-2"></div>
                <div className="rounded-lg bg-[#27c93f] w-3 h-3 mr-2"></div>
            </div>
            <div className="w-full">
                <div className="leading-relaxed space-y-1">

          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">dev</span>{" "}
            <span>=</span>{" "}
            <span>{"{"}</span>
          </div>

          <div className="ml-4">
            <span className="text-gray-400">name</span>:{" "}
            <span className="text-green-400">"{data.name}"</span>,
          </div>

          <div className="ml-4">
            <span className="text-gray-400">role</span>:{" "}
            <span className="text-green-400">"{data.role}"</span>,
          </div>

          <div className="ml-4">
            <span className="text-gray-400">location</span>:{" "}
            <span className="text-green-400">"{data.location}"</span>,
          </div>

          <div className="ml-4">
            <span className="text-gray-400">experience</span>:{" "}
            <span className="text-green-400">"{data.experience}"</span>,
          </div>

          {/* stack */}
          <div className="ml-4">
            <span className="text-gray-400">stack</span>: {"["}
          </div>

          {data.stack.map((tech: string, i: number) => (
            <div key={tech} className="ml-8">
              <span className="text-green-400">"{tech}"</span>
              {i < data.stack.length - 1 && ","}
            </div>
          ))}

          <div className="ml-4">{"],"}</div>

          {/* função */}
          <div className="ml-4">
            <span className="text-gray-400">currentFocus</span>:{" "}
            <span>()</span> {"=>"} {"{"}
          </div>

          <div className="ml-8 text-gray-500">
            {"// Scalable architectures"}
          </div>

          <div className="ml-8">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-green-400">
              "AI-powered apps 🚀"
            </span>
          </div>

          <div className="ml-4">{"}"}</div>

          <div>{"}"}</div>

        </div>

            </div>
        </div>
    )
}
