
const workflow = [
  "Research and Discovery",
  "Planning and Strategy",
  "UI/UX Design",
  "Prototyping and Testing",
  "Frontend Development",
  "Backend Development",
  "API Integration",
  "Testing and Deployment",
];

const Workflow = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      
      <div className="mb-12 text-center sm:text-left">
     
        <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-black text-center">
        My work flow
        </h2>
        <p className="mt-2 text-sm sm:text-base text-center text-gray-500">
           From understanding of business goal to a production ready application.
        </p>
      </div>

      {/* Workflow Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workflow.map((step, index) => {
          const stepNumber = String(index + 1).padStart(2, "0");
          return (
            <div
              key={step}
              className=" flex flex-col justify-between rounded-3xl border border-base-content/10 bg-base-100/70 p-6"
            >
            
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-400 text-sm font-bold text-white shadow-md shadow-primary/20">
                    {stepNumber}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-base-content/20 " />
                </div>
                <h3 className="text-lg font-bold">
                  {step}
                </h3>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Workflow;