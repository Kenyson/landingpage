import { SkillDemo } from '../models/skill.model';

export const SKILLS_DATA: SkillDemo[] = [
  // Languages
  {
    name: 'skills.items.javascript.name',
    category: 'Languages',
    icon: 'pi pi-code',
    description: 'skills.items.javascript.description',
    longDescription: 'skills.items.javascript.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.javascript.examples.fibonacci.title',
        description: 'skills.items.javascript.examples.fibonacci.description',
        code: `class FibonacciCalculator {
  calculateFibonacci(n) {
    if (n <= 1) return n;
    return this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
  }

  getFibonacciSequence(n) {
    if (n <= 0 || isNaN(n)) return '0';

    const sequence = [];
    for (let i = 0; i <= n; i++) {
      sequence.push(this.calculateFibonacci(i));
    }
    return sequence.join(', ');
  }
}

// Uso prático
const calculator = new FibonacciCalculator();
console.log('F(10) =', calculator.calculateFibonacci(10)); // 55
console.log('Sequência até 10:', calculator.getFibonacciSequence(10));`,
        readme: {
          objective: 'Demonstra como criar uma classe em JavaScript para calcular a sequência de Fibonacci, mostrando conceitos de recursão, classes e métodos.',
          prerequisites: 'Conhecimento básico de JavaScript, incluindo funções, loops e conceitos de orientação a objetos.',
          howToRun: 'Execute o código em um console JavaScript (navegador ou Node.js). A classe FibonacciCalculator será criada e testada com exemplos.',
          tips: 'A recursão pode ser ineficiente para números grandes. Para produção, considere usar iteração ou memoização para melhor performance.'
        }
      },
      {
        title: 'skills.items.javascript.examples.arrays.title',
        description: 'skills.items.javascript.examples.arrays.description',
        code: `class ArrayProcessor {
  constructor() {
    this.numbers = [1, 2, 3, 4, 5];
  }

  getEvenNumbers() {
    return this.numbers.filter(n => n % 2 === 0);
  }

  getDoubledNumbers() {
    return this.numbers.map(n => n * 2);
  }

  getSum() {
    return this.numbers.reduce((acc, n) => acc + n, 0);
  }

  processAll() {
    const evenNumbers = this.getEvenNumbers();
    const doubled = this.getDoubledNumbers();
    const sum = this.getSum();

    return {
      original: this.numbers,
      even: evenNumbers,
      doubled: doubled,
      sum: sum
    };
  }
}

// Uso prático
const processor = new ArrayProcessor();
const result = processor.processAll();
console.log('Resultado:', result);`,
        readme: {
          objective: 'Mostra como trabalhar com arrays em JavaScript usando métodos funcionais como filter, map e reduce para processar dados de forma eficiente.',
          prerequisites: 'Entendimento básico de arrays JavaScript e funções. Familiaridade com conceitos de programação funcional ajuda.',
          howToRun: 'Execute o código para ver como uma classe processa um array de números, aplicando diferentes operações e retornando um objeto com os resultados.',
          tips: 'Estes métodos são imutáveis (não alteram o array original) e podem ser encadeados. São ideais para processamento de dados em aplicações modernas.'
        }
      }
    ]
  },
  {
    name: 'skills.items.typescript.name',
    category: 'Languages',
    icon: 'pi pi-shield',
    description: 'skills.items.typescript.description',
    longDescription: 'skills.items.typescript.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.typescript.examples.types.title',
        description: 'skills.items.typescript.examples.types.description',
        code: `class TypeValidator {
  validateString(value: string): { isValid: boolean; message: string } {
    if (value.length > 0) {
      return {
        isValid: true,
        message: \`String válido: "\${value}" (comprimento: \${value.length})\`
      };
    } else {
      return {
        isValid: false,
        message: 'String vazia'
      };
    }
  }

  validateNumber(value: string): { isValid: boolean; message: string } {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return {
        isValid: false,
        message: \`"\${value}" não é um número válido\`
      };
    } else {
      return {
        isValid: true,
        message: \`Número válido: \${numValue}\`
      };
    }
  }

  validateEmail(value: string): { isValid: boolean; message: string } {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    if (emailRegex.test(value)) {
      return {
        isValid: true,
        message: \`Email válido: \${value}\`
      };
    } else {
      return {
        isValid: false,
        message: \`Email inválido: \${value}\`
      };
    }
  }

  validateBoolean(value: string): { isValid: boolean; message: string } {
    const lowerInput = value.toLowerCase();
    if (['true', 'false', '1', '0', 'yes', 'no'].includes(lowerInput)) {
      const boolValue = ['true', '1', 'yes'].includes(lowerInput);
      return {
        isValid: true,
        message: \`Booleano: \${boolValue} (\${value})\`
      };
    } else {
      return {
        isValid: false,
        message: \`Não é um valor booleano válido: \${value}\`
      };
    }
  }
}

// Uso prático
const validator = new TypeValidator();
console.log(validator.validateEmail('user@example.com'));
console.log(validator.validateNumber('42'));
console.log(validator.validateBoolean('true'));`,
        readme: {
          objective: 'Demonstra validação de tipos de dados em TypeScript, mostrando como criar uma classe que valida diferentes tipos (string, número, email, booleano) com mensagens descritivas.',
          prerequisites: 'Conhecimento básico de TypeScript, incluindo tipos primitivos, classes, métodos e expressões regulares.',
          howToRun: 'Execute o código para testar diferentes tipos de validação. Cada método retorna um objeto indicando se o valor é válido e uma mensagem explicativa.',
          tips: 'Este padrão é útil para validação de formulários e entrada de dados. As expressões regulares ajudam a validar formatos específicos como emails.'
        }
      },
      {
        title: 'skills.items.typescript.examples.generics.title',
        description: 'skills.items.typescript.examples.generics.description',
        code: `interface ValidationResult<T = any> {
  isValid: boolean;
  data?: T;
  message: string;
  errors?: string[];
}

class DataValidator<T> {
  private validators: Array<(data: T) => ValidationResult> = [];

  addValidator(validator: (data: T) => ValidationResult): void {
    this.validators.push(validator);
  }

  validate(data: T): ValidationResult<T> {
    for (const validator of this.validators) {
      const result = validator(data);
      if (!result.isValid) {
        return result;
      }
    }

    return {
      isValid: true,
      data: data,
      message: 'Validação bem-sucedida'
    };
  }
}

// Exemplo de uso com interface específica
interface User {
  id: number;
  name: string;
  email: string;
}

const userValidator = new DataValidator<User>();

userValidator.addValidator((user) => {
  if (!user.name || user.name.length < 2) {
    return { isValid: false, message: 'Nome deve ter pelo menos 2 caracteres' };
  }
  return { isValid: true, message: '' };
});

userValidator.addValidator((user) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
  if (!emailRegex.test(user.email)) {
    return { isValid: false, message: 'Email inválido' };
  }
  return { isValid: true, message: '' };
});

const result = userValidator.validate({
  id: 1,
  name: 'João',
  email: 'joao@example.com'
});

console.log(result);`,
        readme: {
          objective: 'Mostra como usar generics em TypeScript para criar validação reutilizável e type-safe de dados, permitindo validação de qualquer tipo de objeto.',
          prerequisites: 'Entendimento de generics em TypeScript, interfaces, classes e funções de alta ordem.',
          howToRun: 'Crie uma instância da classe genérica com um tipo específico, adicione validadores personalizados e teste com dados de exemplo.',
          tips: 'Generics permitem criar código reutilizável e type-safe. O padrão de composição de validadores torna o sistema extensível e fácil de manter.'
        }
      }
    ]
  },
  {
    name: 'skills.items.html5.name',
    category: 'Languages',
    icon: 'pi pi-globe',
    description: 'skills.items.html5.description',
    longDescription: 'skills.items.html5.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.html5.examples.semantic.title',
        description: 'skills.items.html5.examples.semantic.description',
        code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - Kenyson Oliveira</title>
  <meta name="description" content="Desenvolvedor Front-End especializado em Angular">
</head>
<body>
  <header>
    <nav aria-label="Menu principal">
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" aria-labelledby="home-title">
      <h1 id="home-title">Kenyson Oliveira Loureiro</h1>
      <p>Desenvolvedor Front-End</p>
    </section>

    <article id="about">
      <h2>Sobre Mim</h2>
      <p>Especialista em desenvolvimento web moderno...</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 Kenyson Oliveira</p>
  </footer>
</body>
</html>`,
        readme: {
          objective: 'Demonstra como usar elementos semânticos do HTML5 para criar uma estrutura de página web acessível e bem organizada, facilitando a navegação e compreensão do conteúdo.',
          prerequisites: 'Conhecimento básico de HTML. Entendimento de como o HTML semântico ajuda na acessibilidade e SEO.',
          howToRun: 'Salve este código como um arquivo .html e abra em qualquer navegador. A página terá uma estrutura clara e semântica.',
          tips: 'Elementos semânticos como header, main, section, article e footer ajudam os mecanismos de busca e leitores de tela a entender melhor o conteúdo da página.'
        }
      },
      {
        title: 'skills.items.html5.examples.forms.title',
        description: 'skills.items.html5.examples.forms.description',
        code: `<form action="/contact" method="POST">
  <fieldset>
    <legend>Informações de Contato</legend>

    <label for="name">Nome:</label>
    <input type="text" id="name" name="name"
           required minlength="2" maxlength="50"
           aria-describedby="name-help">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"
           required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

    <label for="message">Mensagem:</label>
    <textarea id="message" name="message"
              required minlength="10" maxlength="500"
              rows="5" cols="30"></textarea>

    <button type="submit">Enviar</button>
  </fieldset>
</form>`,
        readme: {
          objective: 'Mostra como criar formulários HTML5 com validação nativa, acessibilidade e boa experiência do usuário usando atributos como required, minlength e pattern.',
          prerequisites: 'Conhecimento básico de formulários HTML. Familiaridade com atributos de validação do HTML5.',
          howToRun: 'Integre este código em uma página HTML. O navegador fará validação automática antes do envio.',
          tips: 'A validação HTML5 funciona sem JavaScript, mas combine com validação no servidor. Use aria-describedby para melhorar acessibilidade.'
        }
      }
    ]
  },
  {
    name: 'skills.items.css3.name',
    category: 'Languages',
    icon: 'pi pi-palette',
    description: 'skills.items.css3.description',
    longDescription: 'skills.items.css3.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.css3.examples.animations.title',
        description: 'skills.items.css3.examples.animations.description',
        code: `.animated-element {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.animated-element:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in {
  animation: slideIn 0.5s ease-out;
}`,
        readme: {
          objective: 'Demonstra animações CSS3 modernas incluindo transições suaves e keyframes para criar efeitos visuais interativos e atraentes.',
          prerequisites: 'Conhecimento básico de CSS. Entendimento de seletores e propriedades CSS.',
          howToRun: 'Aplique estas classes CSS a elementos HTML. As transições ocorrem automaticamente no hover e as animações keyframes podem ser aplicadas diretamente.',
          tips: 'Use transform e opacity para melhor performance. Cubic-bezier permite curvas de animação personalizadas. Sempre considere a experiência do usuário.'
        }
      }
    ]
  },

  // Frontend Frameworks
  {
    name: 'skills.items.angular.name',
    category: 'Frontend',
    icon: 'pi pi-angular',
    description: 'skills.items.angular.description',
    longDescription: 'skills.items.angular.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.angular.examples.tasks.title',
        description: 'skills.items.angular.examples.tasks.description',
        code: `// Componente Angular 19+ com Signals e ReactiveForms
@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="task-manager">
      <h2>Gerenciador de Tarefas</h2>

      <!-- Reactive Form -->
      <form [formGroup]="taskForm" (ngSubmit)="addTask()">
        <input formControlName="title" placeholder="Nova tarefa..." />
        <select formControlName="priority">
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>
        <button type="submit" [disabled]="taskForm.invalid">Adicionar</button>
      </form>

      <!-- Lista com Signals -->
      <ul>
        <li *ngFor="let task of tasks(); trackBy: trackById"
            [class.completed]="task.completed">
          <input type="checkbox"
                 [checked]="task.completed"
                 (change)="toggleTask(task.id)">
          <span class="priority-badge" [class]="task.priority">
            {{ task.priority }}
          </span>
          <span>{{ task.title }}</span>
          <button (click)="removeTask(task.id)">×</button>
        </li>
      </ul>

      <div class="stats">
        <p>Total: {{ tasks().length }}</p>
        <p>Concluídas: {{ completedTasks() }}</p>
        <p>Pendentes: {{ pendingTasks() }}</p>
      </div>
    </div>
  \`
})
export class TaskManagerComponent {
  // Signal para lista de tarefas
  tasks = signal<Task[]>([]);

  // Reactive Form
  taskForm: FormGroup;

  // Valores computados
  pendingTasks = computed(() =>
    this.tasks().filter(t => !t.completed).length
  );

  completedTasks = computed(() =>
    this.tasks().filter(t => t.completed).length
  );

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      priority: ['medium', Validators.required]
    });
  }

  addTask() {
    const control = this.taskForm.get('title');
    if (control?.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: control.value,
        completed: false,
        priority: this.taskForm.get('priority')?.value as 'low' | 'medium' | 'high'
      };
      this.tasks.update(tasks => [...tasks, newTask]);
      this.taskForm.reset({ title: '', priority: 'medium' });
    }
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  removeTask(id: number) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
  }

  trackById(index: number, task: Task) {
    return task.id;
  }
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}`,
        readme: {
          objective: 'Demonstra um gerenciador de tarefas completo usando Angular 19+ com Signals para reatividade e ReactiveForms para validação de formulários.',
          prerequisites: 'Conhecimento de Angular, incluindo componentes, templates, Signals e ReactiveForms. Familiaridade com TypeScript.',
          howToRun: 'Crie um componente Angular standalone, importe as dependências necessárias e use o template e classe fornecidos.',
          tips: 'Signals proporcionam reatividade automática. Use computed para valores derivados. ReactiveForms oferece validação robusta e controle de estado.'
        }
      },
      {
        title: 'skills.items.angular.examples.signals.title',
        description: 'skills.items.angular.examples.signals.description',
        code: `// Signals para dados reativos
@Component({...})
export class ReactiveDemoComponent {
  // 1. Signal básico
  private count = signal(0);

  // 2. Computed (valor derivado automático)
  doubleCount = computed(() => this.count() * 2);
  formattedCount = computed(() => \`Count: \${this.count()}\`);

  // 3. Effect (side effects automáticos)
  constructor() {
    effect(() => {
      console.log(\`Count changed to: \${this.count()}\`);
      console.log(\`Double: \${this.doubleCount()}\`);
    });
  }

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => Math.max(0, v - 1));
  }

  reset() {
    this.count.set(0);
  }
}`,
        readme: {
          objective: 'Mostra como usar Signals do Angular 19+ para criar reatividade automática, computed values e effects para gerenciamento de estado reativo.',
          prerequisites: 'Conhecimento básico de Angular e programação reativa. Entendimento de conceitos como observables e reatividade.',
          howToRun: 'Use signals para estado, computed para valores derivados e effect para side effects. Os valores se atualizam automaticamente.',
          tips: 'Signals são mais performáticos que observables para casos simples. Use computed para evitar recálculos desnecessários. Effects são ideais para logging e integrações externas.'
        }
      }
    ]
  },
  {
    name: 'skills.items.bootstrap.name',
    category: 'Frontend',
    icon: 'pi pi-th-large',
    description: 'skills.items.bootstrap.description',
    longDescription: 'skills.items.bootstrap.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.bootstrap.examples.grid.title',
        description: 'skills.items.bootstrap.examples.grid.description',
        code: `<!-- Grid responsivo com breakpoints -->
<div class="container-fluid">
  <div class="row">
    <!-- Desktop: 8 cols, Tablet: 12 cols -->
    <div class="col-lg-8 col-md-12">
      <div class="card">
        <div class="card-header">
          <h5>Dashboard Analytics</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card stat-card">
                <div class="card-body text-center">
                  <i class="pi pi-users"></i>
                  <h6>Total Users</h6>
                  <h4 class="text-primary">12,345</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card stat-card">
                <div class="card-body text-center">
                  <i class="pi pi-shopping-cart"></i>
                  <h6>Sales</h6>
                  <h4 class="text-success">$89,234</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar: 4 cols desktop, 12 cols mobile -->
    <div class="col-lg-4">
      <div class="card">
        <div class="card-header">
          <h6>Recent Activity</h6>
        </div>
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            New user registered - 2 min ago
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
        readme: {
          objective: 'Demonstra o sistema de grid responsivo do Bootstrap usando classes de breakpoints (col-lg-8, col-md-12, etc.) para criar layouts que se adaptam a diferentes tamanhos de tela.',
          prerequisites: 'Conhecimento básico de HTML e CSS. Familiaridade com conceito de layouts responsivos.',
          howToRun: 'Inclua Bootstrap CSS no projeto e aplique as classes de grid aos elementos HTML. O layout se adaptará automaticamente aos breakpoints.',
          tips: 'Use container/container-fluid para wrapping. Combine breakpoints (col-lg-8 col-md-12) para controle preciso. Sempre teste em diferentes dispositivos.'
        }
      },
      {
        title: 'skills.items.bootstrap.examples.components.title',
        description: 'skills.items.bootstrap.examples.components.description',
        code: `<div class="d-flex align-items-center p-3 bg-light rounded">
  <div class="flex-shrink-0">
    <div class="bg-primary rounded-circle p-2">
      <i class="pi pi-user text-white"></i>
    </div>
  </div>
  <div class="flex-grow-1 ms-3">
    <h6 class="mb-1">New user registered</h6>
    <small class="text-muted">2 minutes ago</small>
  </div>
  <button class="btn btn-primary btn-sm">View</button>
</div>`,
        readme: {
          objective: 'Mostra como usar utilitários Flexbox do Bootstrap (d-flex, align-items-center, flex-grow-1) e classes de espaçamento para criar layouts flexíveis e bem estruturados.',
          prerequisites: 'Conhecimento básico de Bootstrap. Entendimento de conceitos de layout e espaçamento.',
          howToRun: 'Aplique as classes Bootstrap diretamente nos elementos HTML. Não é necessário CSS adicional para layouts simples.',
          tips: 'Utilitários Flexbox permitem layouts complexos sem CSS customizado. Combine com classes de cor e espaçamento para interfaces ricas rapidamente.'
        }
      }
]
   },

   // Tools
   {
    name: 'skills.items.primeng.name',
    category: 'Tools',
    icon: 'pi pi-desktop',
    description: 'skills.items.primeng.description',
    longDescription: 'skills.items.primeng.longDescription',
    demoType: 'interactive',
    examples: [
      {
        title: 'skills.items.primeng.examples.portfolio.title',
        description: 'skills.items.primeng.examples.portfolio.description',
        code: `<!-- Botões PrimeNG no Hero -->
<p-button
  [routerLink]="['/contact']"
  label="Get In Touch"
  severity="primary"
  size="large">
</p-button>

<!-- Chips de tecnologias nos projetos -->
<div class="project-technologies">
  <p-chip [label]="'Angular'" size="small"></p-chip>
  <p-chip [label]="'TypeScript'" size="small"></p-chip>
</div>

<!-- ProgressBar customizada nas skills -->
<p-progressBar
  [value]="skillLevel"
  [showValue]="false"
  styleClass="custom-progress"
  [style]="{'height': '6px'}">
</p-progressBar>

<!-- Card com header personalizado -->
<p-card styleClass="skill-card">
  <ng-template pTemplate="header">
    <h3>Meu Conhecimento</h3>
  </ng-template>
  <p>Conteúdo detalhado da tecnologia...</p>
</p-card>`
      },
      {
        title: 'skills.items.primeng.examples.theme.title',
        description: 'skills.items.primeng.examples.theme.description',
        code: `/* CSS customizado para componentes PrimeNG */
.p-button {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%) !important;
  border: none !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

.p-button:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4) !important;
}

/* Input fields dark theme */
.p-inputtext {
  background: #1a1a1a !important;
  border: 1px solid #262626 !important;
  color: #e5e5e5 !important;
}

.p-inputtext:focus {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.2) !important;
}

/* Chips estilizados */
.p-chip {
  background: #3b82f615 !important;
  border: 1px solid #3b82f640 !important;
}`
      }
    ]
  },
  {
    name: 'skills.items.git.name',
    category: 'Tools',
    icon: 'pi pi-github',
    description: 'skills.items.git.description',
    longDescription: 'skills.items.git.longDescription',
    demoType: 'workflow',
    workflowSteps: [
      {
        title: 'skills.items.git.workflowSteps.init.title',
        description: 'skills.items.git.workflowSteps.init.description',
        icon: 'pi pi-plus'
      },
      {
        title: 'skills.items.git.workflowSteps.commits.title',
        description: 'skills.items.git.workflowSteps.commits.description',
        icon: 'pi pi-check'
      },
      {
        title: 'skills.items.git.workflowSteps.branches.title',
        description: 'skills.items.git.workflowSteps.branches.description',
        icon: 'pi pi-share-alt'
      },
      {
        title: 'skills.items.git.workflowSteps.merge.title',
        description: 'skills.items.git.workflowSteps.merge.description',
        icon: 'pi pi-merge'
      }
    ],
    examples: [
      {
        title: 'skills.items.git.examples.workflow.title',
        description: 'skills.items.git.examples.workflow.description',
        code: `# Configuração inicial
git config --global user.name "Kenyson Oliveira"
git config --global user.email "kenysonoliveira@gmail.com"

# Iniciar repositório
git init
git add .
git commit -m "Initial commit"

# Criar feature branch
git checkout -b feature/nova-funcionalidade

# Após alterações
git add .
git commit -m "feat: adicionar nova funcionalidade"

# Rebase para manter histórico limpo
git rebase -i HEAD~2

# Push e criar PR
git push origin feature/nova-funcionalidade

# Após review, merge com squash
git checkout main
git pull origin main
git merge --squash feature/nova-funcionalidade
git commit -m "feat: nova funcionalidade (#123)"

# Limpar branch
git branch -d feature/nova-funcionalidade`,
        readme: {
          objective: 'Demonstra um fluxo completo de trabalho com Git, desde a configuração inicial até o merge de uma feature branch usando boas práticas de desenvolvimento colaborativo.',
          prerequisites: 'Conhecimento básico de linha de comando. Familiaridade com conceitos de versionamento.',
          howToRun: 'Execute os comandos sequencialmente em um terminal. Comece configurando o Git, depois siga o fluxo de criação de branches e merge.',
          tips: 'Use conventional commits para mensagens claras. Faça rebase interativo para limpar o histórico. Sempre faça pull antes de merge para evitar conflitos.'
        }
      }
    ]
  },
  {
    name: 'skills.items.vscode.name',
    category: 'Tools',
    icon: 'pi pi-cog',
    description: 'skills.items.vscode.description',
    longDescription: 'skills.items.vscode.longDescription',
    demoType: 'workflow',
    workflowSteps: [
      {
        title: 'skills.items.vscode.workflowSteps.extensions.title',
        description: 'skills.items.vscode.workflowSteps.extensions.description',
        icon: 'pi pi-plug'
      },
      {
        title: 'skills.items.vscode.workflowSteps.debugging.title',
        description: 'skills.items.vscode.workflowSteps.debugging.description',
        icon: 'pi pi-bug'
      },
      {
        title: 'skills.items.vscode.workflowSteps.git.title',
        description: 'skills.items.vscode.workflowSteps.git.description',
        icon: 'pi pi-git-branch'
      },
      {
        title: 'skills.items.vscode.workflowSteps.terminal.title',
        description: 'skills.items.vscode.workflowSteps.terminal.description',
        icon: 'pi pi-terminal'
      }
    ],
    examples: [
      {
        title: 'skills.items.vscode.examples.config.title',
        description: 'skills.items.vscode.examples.config.description',
        code: `{
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
  "terminal.integrated.shell.windows": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0.0\\\\powershell.exe"
}`,
        readme: {
          objective: 'Mostra uma configuração otimizada do VS Code para desenvolvimento Angular/TypeScript, incluindo formatação automática, linting e integração Git.',
          prerequisites: 'VS Code instalado com extensões recomendadas (Prettier, ESLint, Angular Language Service).',
          howToRun: 'Copie estas configurações para seu arquivo settings.json do VS Code (File > Preferences > Settings > Open Settings JSON).',
          tips: 'Instale extensões como Prettier, ESLint e Angular Language Service. Use atalhos como Ctrl+Shift+P para produtividade máxima.'
        }
      }
    ]
  }
];