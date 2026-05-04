export interface SkillDemo {
  name: string;
  category: 'Languages' | 'Frontend' | 'Tools';
  icon: string;
  description: string;
  longDescription: string;
  demoType: 'code' | 'interactive' | 'workflow';
  demoCode?: string;
  codeLang?: string;
  workflowSteps?: Array<{ title: string; description: string; icon: string }>;
  examples: Array<{
    title: string;
    description: string;
    code?: string;
    readme?: {
      objective: string;
      prerequisites: string;
      howToRun: string;
      tips: string;
    }
  }>;
}