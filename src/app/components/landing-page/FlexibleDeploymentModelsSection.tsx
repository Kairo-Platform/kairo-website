import { Icon } from "@iconify/react";

const deploymentModels = [
  "Use Kairo-managed AI infrastructure",
  "Connect your preferred LLM provider",
  "Bring your own AI models",
  "Deploy institution-specific AI environments",
];

export const FlexibleDeploymentModelsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <div className="mx-auto max-w-3xl text-center lg:mb-10">
          <h2 className="text-4xl font-medium leading-14 lg:text-5xl">
            Flexible deployment models
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 items-center justify-center">
          <div className="bg-[#FFF0E8] rounded-2xl lg:rounded-r-none px-10 h-60 max-w-xl flex items-center justify-center">
            <p className="text-pretty text-2xl">Kairo supports multiple deployment models based on institutional requirements.
            </p>
          </div>
          <div className="bg-black text-white rounded-2xl flex flex-col justify-center px-10 h-100 min-w-96 w-full max-w-1/2 py-10">
            <h3 className="text-lg font-medium mb-4">Institutions can:</h3>
            <ul className="flex flex-col gap-4">
              {deploymentModels.map((model) => (
                <li className="flex lg:text-2xl items-center gap-2" key={model}>
                  <Icon icon="material-symbols:check-circle-outline" className="text-accent" />
                  <span>{model}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibleDeploymentModelsSection;
