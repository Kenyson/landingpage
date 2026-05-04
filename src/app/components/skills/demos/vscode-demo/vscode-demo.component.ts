import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../translation.pipe';

interface VSCodeFeature {
  title: string;
  description: string;
  icon: string;
  category: 'editing' | 'debugging' | 'extensions' | 'terminal' | 'git';
}

interface Extension {
  name: string;
  description: string;
  publisher: string;
  downloads: string;
  category: string;
  recommended: boolean;
}

interface KeyBinding {
  key: string;
  command: string;
  description: string;
  category: 'editing' | 'navigation' | 'debugging' | 'git' | 'terminal';
}

@Component({
  selector: 'app-vscode-demo',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './vscode-demo.component.html',
  styleUrls: ['./vscode-demo.component.css']
})
export class VscodeDemoComponent {
  activeSettingsTab = 'user';

  vscodeFeatures: VSCodeFeature[] = [
    {
      title: 'IntelliSense',
      description: 'Autocompletar inteligente com TypeScript, JavaScript e outras linguagens',
      icon: 'pi pi-bolt',
      category: 'editing'
    },
    {
      title: 'Debugging Avançado',
      description: 'Depuração integrada para Node.js, browsers e aplicações mobile',
      icon: 'pi pi-bug',
      category: 'debugging'
    },
    {
      title: 'Extensões Poderosas',
      description: 'Milhares de extensões para customizar e estender funcionalidades',
      icon: 'pi pi-puzzle-piece',
      category: 'extensions'
    },
    {
      title: 'Terminal Integrado',
      description: 'Terminal embutido com suporte a múltiplos shells e comandos',
      icon: 'pi pi-terminal',
      category: 'terminal'
    },
    {
      title: 'Git Integration',
      description: 'Controle de versão visual com diff, staging e resolução de conflitos',
      icon: 'pi pi-git-branch',
      category: 'git'
    },
    {
      title: 'Live Share',
      description: 'Colaboração em tempo real para pair programming e code reviews',
      icon: 'pi pi-users',
      category: 'editing'
    }
  ];

  essentialExtensions: Extension[] = [
    {
      name: 'Angular Language Service',
      description: 'Suporte completo para Angular com IntelliSense, navegação e validação',
      publisher: 'Angular',
      downloads: '10M+',
      category: 'Framework',
      recommended: true
    },
    {
      name: 'TypeScript Importer',
      description: 'Auto import de módulos TypeScript com atalhos inteligentes',
      publisher: 'pmneo',
      downloads: '2M+',
      category: 'Language',
      recommended: true
    },
    {
      name: 'Prettier',
      description: 'Formatador de código automático para manter consistência',
      publisher: 'Prettier',
      downloads: '15M+',
      category: 'Formatter',
      recommended: true
    },
    {
      name: 'ESLint',
      description: 'Linting em tempo real para identificar e corrigir problemas de código',
      publisher: 'Microsoft',
      downloads: '20M+',
      category: 'Linter',
      recommended: true
    },
    {
      name: 'GitLens',
      description: 'Superpoderes para Git com blame, histórico e comparações avançadas',
      publisher: 'GitKraken',
      downloads: '25M+',
      category: 'Git',
      recommended: true
    },
    {
      name: 'Material Icon Theme',
      description: 'Ícones de arquivo temáticos para melhor identificação visual',
      publisher: 'Philipp Kief',
      downloads: '8M+',
      category: 'Theme',
      recommended: false
    }
  ];

  keyBindings: KeyBinding[] = [
    {
      key: 'Ctrl+Shift+P',
      command: 'Command Palette',
      description: 'Abre a paleta de comandos para acessar todas as funcionalidades',
      category: 'editing'
    },
    {
      key: 'Ctrl+P',
      command: 'Quick Open',
      description: 'Abre arquivos rapidamente usando fuzzy search',
      category: 'navigation'
    },
    {
      key: 'Ctrl+Shift+F',
      command: 'Find in Files',
      description: 'Busca texto em todos os arquivos do projeto',
      category: 'editing'
    },
    {
      key: 'F5',
      command: 'Start Debugging',
      description: 'Inicia sessão de debug da aplicação',
      category: 'debugging'
    },
    {
      key: 'Ctrl+`',
      command: 'Toggle Terminal',
      description: 'Abre/fecha o terminal integrado',
      category: 'terminal'
    },
    {
      key: 'Ctrl+Shift+G',
      command: 'Git: Open Changes',
      description: 'Abre visualização de mudanças do Git',
      category: 'git'
    },
    {
      key: 'Alt+Shift+F',
      command: 'Format Document',
      description: 'Formata o documento atual automaticamente',
      category: 'editing'
    },
    {
      key: 'Ctrl+K Ctrl+C',
      command: 'Comment Line',
      description: 'Comenta/descomenta a linha atual',
      category: 'editing'
    }
  ];

  workflowSteps = [
    {
      title: 'Instalação e Configuração',
      description: 'Instalar VS Code, configurar tema escuro e instalar extensões essenciais',
      icon: 'pi pi-cog'
    },
    {
      title: 'Exploração do Projeto',
      description: 'Usar Explorer para navegar arquivos, Outline para estrutura do código',
      icon: 'pi pi-folder'
    },
    {
      title: 'Desenvolvimento Ativo',
      description: 'Escrever código com IntelliSense, usar atalhos para produtividade máxima',
      icon: 'pi pi-code'
    },
    {
      title: 'Debugging e Testes',
      description: 'Configurar breakpoints, executar testes e debugar aplicações',
      icon: 'pi pi-bug'
    },
    {
      title: 'Controle de Versão',
      description: 'Gerenciar commits, branches e pull requests diretamente no editor',
      icon: 'pi pi-git-branch'
    },
    {
      title: 'Deploy e Produção',
      description: 'Executar builds, deploys e monitoramento através do terminal integrado',
      icon: 'pi pi-cloud-upload'
    }
  ];

  userSettings = `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html"
  },
  "files.associations": {
    "*.component.html": "html"
  },
  "angular.experimental-ivy": true,
  "git.autofetch": true,
  "terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0.0\\\\powershell.exe",
  "workbench.colorTheme": "Default Dark Modern",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.5,
  "editor.tabSize": 2,
  "editor.insertSpaces": true
}`;

  workspaceSettings = `{
  "angular.enable-strict-mode-prompt": false,
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "emmet.triggerExpansionOnTab": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`;

  setActiveTab(tab: 'user' | 'workspace') {
    this.activeSettingsTab = tab;
  }
}
