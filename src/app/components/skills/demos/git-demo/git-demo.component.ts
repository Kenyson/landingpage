import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../translation.pipe';


interface GitStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  command: string;
  output: string;
  completed: boolean;
}

interface GitBranch {
  name: string;
  commits: string[];
  current: boolean;
  merged: boolean;
}

@Component({
  selector: 'app-git-demo',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './git-demo.component.html',
  styleUrls: ['./git-demo.component.css']
})
export class GitDemoComponent {
  workflowSteps = signal<GitStep[]>([
    {
      id: 'init',
      title: 'Inicializar Repositório',
      description: 'Criar um novo repositório Git e fazer commit inicial',
      icon: 'pi pi-plus-circle',
      command: 'git init && git add . && git commit -m "Initial commit"',
      output: `Initialized empty Git repository in /project/.git/
[master (root-commit) abc1234] Initial commit
 42 files changed, 1337 insertions(+)
 create mode 100644 README.md
 create mode 100644 package.json
 ...`,
      completed: false
    },
    {
      id: 'branch',
      title: 'Criar Branch de Feature',
      description: 'Criar uma nova branch para desenvolver uma funcionalidade',
      icon: 'pi pi-share-alt',
      command: 'git checkout -b feature/user-authentication',
      output: `Switched to a new branch 'feature/user-authentication'`,
      completed: false
    },
    {
      id: 'work',
      title: 'Desenvolver e Commitar',
      description: 'Fazer mudanças no código e commitar com mensagens descritivas',
      icon: 'pi pi-code',
      command: 'git add . && git commit -m "feat: implement user login form"',
      output: `On branch feature/user-authentication
Changes to be committed:
  new file:   src/components/LoginForm.vue
  modified:   src/App.vue

[feature/user-authentication abc1235] feat: implement user login form
 2 files changed, 156 insertions(+)`,
      completed: false
    },
    {
      id: 'push',
      title: 'Enviar para Remote',
      description: 'Enviar a branch para o repositório remoto',
      icon: 'pi pi-cloud-upload',
      command: 'git push origin feature/user-authentication',
      output: `Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 756 bytes | 756.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'feature/user-authentication' on GitHub by visiting:
remote:      https://github.com/user/repo/pull/new/feature/user-authentication
remote:
To github.com:user/repo.git
 * [new branch]      feature/user-authentication -> feature/user-authentication`,
      completed: false
    },
    {
      id: 'pr',
      title: 'Criar Pull Request',
      description: 'Abrir Pull Request para revisão e merge',
      icon: 'pi pi-github',
      command: 'gh pr create --title "Add user authentication" --body "Implementa formulário de login e autenticação de usuários"',
      output: `Creating pull request for feature/user-authentication into main in user/repo

✓ Pull request created: https://github.com/user/repo/pull/42`,
      completed: false
    },
    {
      id: 'merge',
      title: 'Merge com Squash',
      description: 'Aprovar e fazer merge da Pull Request usando squash',
      icon: 'pi pi-check-circle',
      command: 'git checkout main && git pull && git merge --squash feature/user-authentication && git commit -m "feat: add user authentication (#42)"',
      output: `Switched to branch 'main'
Your branch is up to date with 'origin/main'.
Already up to date.
Squash commit -- not updating HEAD
Automatic merge went well; stopped before committing as requested

[main abc1236] feat: add user authentication (#42)
 3 files changed, 289 insertions(+)`,
      completed: false
    },
    {
      id: 'cleanup',
      title: 'Limpar Branch',
      description: 'Remover a branch local e remota após o merge',
      icon: 'pi pi-trash',
      command: 'git branch -d feature/user-authentication && git push origin --delete feature/user-authentication',
      output: `Deleted branch feature/user-authentication (was abc1235).
To github.com:user/repo.git
 - [deleted]         feature/user-authentication`,
      completed: false
    }
  ]);

  currentStep = signal(0);
  branches = signal<GitBranch[]>([
    {
      name: 'main',
      commits: ['abc1234'],
      current: true,
      merged: false
    }
  ]);

  configCommands = [
    { command: 'git config --global user.name "Seu Nome"', description: 'Configurar nome do usuário' },
    { command: 'git config --global user.email "seu@email.com"', description: 'Configurar email do usuário' },
    { command: 'git config --global core.editor "code --wait"', description: 'Configurar editor padrão' }
  ];

  dailyCommands = [
    { command: 'git status', description: 'Verificar status dos arquivos' },
    { command: 'git add .', description: 'Adicionar todos os arquivos modificados' },
    { command: 'git commit -m "mensagem"', description: 'Fazer commit das mudanças' },
    { command: 'git log --oneline', description: 'Ver histórico de commits' }
  ];

  branchCommands = [
    { command: 'git branch feature/nome', description: 'Criar nova branch' },
    { command: 'git checkout feature/nome', description: 'Trocar para branch' },
    { command: 'git branch -d feature/nome', description: 'Deletar branch local' },
    { command: 'git push origin --delete feature/nome', description: 'Deletar branch remota' }
  ];

  collabCommands = [
    { command: 'git push origin branch', description: 'Enviar branch para remote' },
    { command: 'git pull origin main', description: 'Baixar mudanças do remote' },
    { command: 'git fetch --all', description: 'Buscar todas as branches remotas' },
    { command: 'git rebase main', description: 'Rebase com branch principal' }
  ];

  setCurrentStep(step: number) {
    this.currentStep.set(step);
  }

  executeStep(stepIndex: number) {
    if (stepIndex >= 0 && stepIndex < this.workflowSteps().length) {
      this.workflowSteps.update(steps => {
        const newSteps = [...steps];
        newSteps[stepIndex].completed = true;
        return newSteps;
      });

      // Simulate workflow progression
      this.simulateStepExecution(stepIndex);
    }
  }

  nextStep() {
    const nextIndex = this.currentStep() + 1;
    if (nextIndex < this.workflowSteps().length) {
      this.setCurrentStep(nextIndex);
    }
  }

  simulateStepExecution(stepIndex: number) {
    const step = this.workflowSteps()[stepIndex];

    switch (step.id) {
      case 'branch':
        this.branches.update(branches => [
          ...branches,
          {
            name: 'feature/user-authentication',
            commits: [],
            current: true,
            merged: false
          }
        ]);
        this.branches.update(branches =>
          branches.map(b => ({ ...b, current: b.name === 'feature/user-authentication' }))
        );
        break;

      case 'work':
        this.branches.update(branches =>
          branches.map(b =>
            b.current ? { ...b, commits: [...b.commits, 'abc1235'] } : b
          )
        );
        break;

      case 'merge':
        this.branches.update(branches =>
          branches.map(b =>
            b.name === 'feature/user-authentication'
              ? { ...b, merged: true, current: false }
              : b.name === 'main'
                ? { ...b, commits: [...b.commits, 'abc1236'], current: true }
                : b
          )
        );
        break;

      case 'cleanup':
        this.branches.update(branches =>
          branches.filter(b => b.name !== 'feature/user-authentication')
        );
        break;
    }
  }

  simulateWorkflow() {
    let stepIndex = 0;
    const executeNext = () => {
      if (stepIndex < this.workflowSteps().length) {
        this.executeStep(stepIndex);
        this.setCurrentStep(stepIndex);
        stepIndex++;
        setTimeout(executeNext, 1500);
      }
    };
    executeNext();
  }

  resetWorkflow() {
    this.workflowSteps.update(steps =>
      steps.map(step => ({ ...step, completed: false }))
    );
    this.currentStep.set(0);
    this.branches.set([
      {
        name: 'main',
        commits: ['abc1234'],
        current: true,
        merged: false
      }
    ]);
  }

  showMergePoint(): boolean {
    return this.branches().some(b => b.merged);
  }

  getStepIconClass(step: GitStep): string {
    if (step.completed) return 'completed';

    switch (step.id) {
      case 'init':
      case 'branch':
        return 'init';
      case 'work':
      case 'push':
        return 'work';
      case 'pr':
        return 'collab';
      case 'merge':
      case 'cleanup':
        return 'merge';
      default:
        return '';
    }
  }
}
