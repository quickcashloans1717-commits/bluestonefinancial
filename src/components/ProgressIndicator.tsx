import { Check } from "lucide-react";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const ProgressIndicator = ({ currentStep, totalSteps, steps }: ProgressIndicatorProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className="flex items-center flex-1">
              <div className="flex flex-col items-center relative">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm
                    transition-all duration-300 z-10
                    ${isCompleted 
                      ? 'bg-success text-success-foreground' 
                      : isCurrent 
                        ? 'bg-accent text-accent-foreground ring-4 ring-accent/20' 
                        : 'bg-muted text-muted-foreground'
                    }
                  `}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
                </div>
                <span className={`
                  text-xs mt-2 font-medium absolute top-12 whitespace-nowrap
                  ${isCurrent ? 'text-accent' : isCompleted ? 'text-success' : 'text-muted-foreground'}
                `}>
                  {step}
                </span>
              </div>
              
              {stepNumber < totalSteps && (
                <div className="flex-1 h-1 mx-2 relative">
                  <div className="absolute inset-0 bg-muted"></div>
                  <div 
                    className={`
                      absolute inset-0 transition-all duration-500
                      ${isCompleted ? 'bg-success' : 'bg-muted'}
                    `}
                    style={{ width: isCompleted ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
