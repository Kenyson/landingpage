export type Language = 'en' | 'pt' | 'it';

export interface Translations {
  menu: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  header: {
    resume: string;
  };
  home: {
    greeting: string;
    name: string;
    title: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    tagline: string;
    ctaTouch: string;
    ctaProjects: string;
    scroll: string;
  };
  about: {
    title: string;
    intro: string;
    details: {
      location: string;
      nationality: string;
      age: string;
      languages: string;
    };
    education: {
      title: string;
      degree: string;
      university: string;
      date: string;
      dateComplete: string;
    };
    softSkills: {
      title: string;
      items: string[];
    };
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      frontend: string;
      tools: string;
    };
    welcome: {
      title: string;
      description: string;
    };
    stats: {
      technologies: string;

      categories: string;
    };
    examples: string;
    projectsUsing: string;
    demoPlaceholder: string;
    items: {
      javascript: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          fibonacci: { title: string; description: string; };
          arrays: { title: string; description: string; };
        };
      };
      typescript: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          types: { title: string; description: string; };
          generics: { title: string; description: string; };
        };
      };
      html5: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          semantic: { title: string; description: string; };
          forms: { title: string; description: string; };
        };
      };
      css3: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          animations: { title: string; description: string; };
        };
      };
      angular: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          tasks: { title: string; description: string; };
          signals: { title: string; description: string; };
        };
      };
      bootstrap: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          grid: { title: string; description: string; };
          components: { title: string; description: string; };
        };
      };
      primeng: {
        name: string;
        description: string;
        longDescription: string;
        examples: {
          portfolio: { title: string; description: string; };
          theme: { title: string; description: string; };
        };
      };
      git: {
        name: string;
        description: string;
        longDescription: string;
        workflowSteps: {
          init: { title: string; description: string; };
          commits: { title: string; description: string; };
          branches: { title: string; description: string; };
          merge: { title: string; description: string; };
        };
        examples: {
          workflow: { title: string; description: string; };
        };
        demo: {
          steps: {
            init: { title: string; description: string; };
            branch: { title: string; description: string; };
            work: { title: string; description: string; };
            push: { title: string; description: string; };
            pr: { title: string; description: string; };
            merge: { title: string; description: string; };
          };
        };
      };
      vscode: {
        name: string;
        description: string;
        longDescription: string;
        workflowSteps: {
          extensions: { title: string; description: string; };
          debugging: { title: string; description: string; };
          git: { title: string; description: string; };
          terminal: { title: string; description: string; };
        };
        examples: {
          config: { title: string; description: string; };
        };
      };
    };

    modal: {
      exampleTitle: string;
      codeTitle: string;
      readmeTitle: string;
        readme: {
          objective: string;
          prerequisites: string;
          howToRun: string;
          tips: string;
          objectiveDesc: string;
          prerequisitesDesc: string;
          howToRunDesc: string;
          tipsDesc: string;
        };
    };
    button: {
      viewExample: string;
    };
  };
  experience: {
    title: string;
    present: string;
    internship: string;
    items: {
      nttData: {
        role: string;
        company: string;
        location: string;
        period: string;
        responsibilities: string[];
      };
      conexosIntern: {
        role: string;
        company: string;
        location: string;
        period: string;
        responsibilities: string[];
      };
    };
  };
  projects: {
    title: string;
    viewProject: string;
    viewCode: string;
    viewDemo: string;
    items: {
      medicalSystem: {
        title: string;
        description: string;
      };
      duimpInterface: {
        title: string;
        description: string;
      };
      mainMenuSystem: {
        title: string;
        description: string;
      };
    };
  };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        message: string;
        send: string;
        placeholders: {
          name: string;
          email: string;
          message: string;
        };
      };
      info: {
        email: string;
        response: string;
      };
      success: string;
    };
  demos: {
    javascript: {
      title: string;
      description: string;
      inputPlaceholder: string;
      calculating: string;
      calculate: string;
      result: string;
      sequence: string;
      examples: string;
      validation: string;
    };
    typescript: {
      title: string;
      description: string;
      inputPlaceholder: string;
      validationPrompt: string;
      typeValidationPrompt: string;
      typeLabels: {
        string: string;
        number: string;
        email: string;
        boolean: string;
      };
    };
      html5: {
        title: string;
        description: string;
        labels: {
          name: string;
          email: string;
          age: string;
          message: string;
          contactInfo: string;
        };
      placeholders: {
        name: string;
        email: string;
        age: string;
        message: string;
      };
      validation: {
        nameRequired: string;
        nameMinLength: string;
        nameMaxLength: string;
        emailRequired: string;
        emailPattern: string;
        ageRequired: string;
        ageMin: string;
        ageMax: string;
        messageRequired: string;
        messageMinLength: string;
        messageMaxLength: string;
      };
      submit: string;
      clear: string;
      successMessage: string;
      dataReceived: string;
      fieldLabels: {
        name: string;
        email: string;
        age: string;
        message: string;
      };
      helpText: {
        name: string;
        message: string;
      };
    };
    css3: {
      title: string;
      description: string;
      hoverTitle: string;
      hoverText: string;
      hoverActivate: string;
      hoverDeactivate: string;
      transformTitle: string;
      transformStart: string;
      transformStop: string;
      keyframeTitle: string;
      keyframeStart: string;
      keyframeStop: string;
      loadingTitle: string;
      loadingStart: string;
      loadingStop: string;
      gradientTitle: string;
      gradientStart: string;
      gradientStop: string;
      pulseTitle: string;
      pulseText: string;
      pulseStart: string;
      pulseStop: string;
      controlsTitle: string;
      speedLabel: string;
      easingLabel: string;
      resetAll: string;
    };
    bootstrap: {
      title: string;
      description: string;
      viewModeLabel: string;
      viewModes: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      dashboardTitle: string;
      dashboardSubtitle: string;
      quickActionsTitle: string;
      actions: {
        addProduct: string;
        manageUsers: string;
        reports: string;
      };
      userManagementTitle: string;
      reportsTitle: string;
      reportsData: {
        activeUsers: string;
        sales: string;
        growth: string;
        rating: string;
      };
      feedback: {
        productAdded: string;
        userManagementEnabled: string;
        userManagementDisabled: string;
        reportsEnabled: string;
        reportsDisabled: string;
      };
    };
    angular: {
      title: string;
      description: string;
      signalsTitle: string;
      counterLabel: string;
      doubleLabel: string;
      squareLabel: string;
      statusLabel: string;
      formsTitle: string;
      taskInput: string;
      taskAdd: string;
      taskRequired: string;
      taskMinLength: string;
      priorityLow: string;
      priorityMedium: string;
      priorityHigh: string;
      statsTotal: string;
      statsPending: string;
      statsCompleted: string;
      formLabels: {
        email: string;
        password: string;
        confirmPassword: string;
      };
      formPlaceholders: {
        email: string;
        password: string;
        confirmPassword: string;
      };
      formValidation: {
        emailRequired: string;
        emailInvalid: string;
        passwordRequired: string;
        passwordMinLength: string;
        passwordPattern: string;
        confirmRequired: string;
        passwordMismatch: string;
      };
      formSubmit: string;
      formClear: string;
      formStatus: {
        valid: string;
        touched: string;
        dirty: string;
      };
    };
    git: {
      title: string;
      description: string;
      workflowTitle: string;
    };
    vscode: {
      title: string;
      description: string;
      featuresTitle: string;
    };
  };
  footer: {
    brand: string;
    tagline: string;
    links: string;
    connect: string;
    builtWith: string;
  };
  theme: {
    toggleLight: string;
    toggleDark: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    menu: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato'
    },
    header: {
      resume: 'Currículo'
    },
    home: {
      greeting: 'Olá, eu sou',
      name: 'Kenyson Oliveira Loureiro',
      title: 'Desenvolvedor Front-End',
      titlePrefix: 'Desenvolvedor',
      titleHighlight: 'Front-End',
      titleSuffix: '',
      tagline: 'Criando experiências digitais incríveis com Angular.',
      ctaTouch: 'Vamos Conversar',
      ctaProjects: 'Ver Projetos',
      scroll: 'Role para baixo'
    },
    about: {
      title: 'Sobre Mim',
      intro: 'Desenvolvedor Front-End com experiência no desenvolvimento e modernização de aplicações web empresariais usando Angular, AngularJS, TypeScript e tecnologias web modernas. Participei de projetos de transformação digital para o setor logístico e aduaneiro, contribuindo para a migração de sistemas legados para arquiteturas modernas e para o desenvolvimento de novas funcionalidades com alto impacto operacional. Destaco-me pela capacidade de resolução de problemas, colaboração em equipes Agile, atenção à qualidade do código e aprendizado contínuo. Estou em busca de oportunidades para crescer profissionalmente em contextos inovadores e internacionais.',
      details: {
        location: 'Localização',
        nationality: 'Nacionalidade',
        age: 'Idade',
        languages: 'Idiomas'
      },
education: {
         title: 'Formação',
         degree: 'Laurea in Ingegneria del Software',
         university: 'Unicesumar',
         date: 'Paraná – Brasile',
         dateComplete: 'Conseguita nel dicembre 2023.'
       },
       softSkills: {
         title: 'Soft Skills',
         items: [
           'Resolução de Problemas',
           'Trabalho em Equipe',
           'Comunicação Eficaz',
           'Aprendizado Rápido',
           'Adaptabilidade',
           'Gestão de Prioridades',
           'Atenção aos Detalhes',
           'Orientação a Resultados',
           'Autonomia Operacional'
         ]
       }
     },
    skills: {
      title: 'Minhas Habilidades',
      categories: {
        languages: 'Linguagens',
        frontend: 'Frameworks Frontend',
        tools: 'Ferramentas e Plataformas'
      },
      welcome: {
        title: 'Explore minhas habilidades',
        description: 'Selecione uma tecnologia na lista lateral para ver demonstrações interativas, exemplos práticos e detalhes sobre meu conhecimento.'
      },
      stats: {
        technologies: 'Tecnologias',

        categories: 'Categorias'
      },
      examples: 'Exemplos Práticos',
      projectsUsing: 'Projetos Utilizando',
      demoPlaceholder: 'Demo para - Em desenvolvimento',
      items: {
        javascript: {
          name: 'JavaScript',
          description: 'Linguagem de programação essencial para desenvolvimento web moderno.',
          longDescription: 'JavaScript é a linguagem base para desenvolvimento web, permitindo criar aplicações interativas e dinâmicas tanto no front-end quanto no back-end.',
          examples: {
            fibonacci: {
              title: 'Função Fibonacci Recursiva',
              description: 'Implementação eficiente do cálculo da sequência de Fibonacci.'
            },
            arrays: {
              title: 'Manipulação de Arrays',
              description: 'Operações modernas com arrays usando métodos funcionais.'
            }
          }
        },
        typescript: {
          name: 'TypeScript',
          description: 'Superset tipado do JavaScript com validação em tempo real.',
          longDescription: 'TypeScript adiciona tipagem estática ao JavaScript, prevenindo erros em tempo de desenvolvimento e melhorando a manutenção do código através de validação de tipos em tempo real.',
          examples: {
            types: {
              title: 'Sistema de Tipos em Ação',
              description: 'Veja como o TypeScript valida tipos e previne erros.'
            },
            generics: {
              title: 'Generics e Interfaces',
              description: 'APIs tipadas reutilizáveis com generics.'
            }
          }
        },
        html5: {
          name: 'HTML5',
          description: 'Estrutura semântica moderna com elementos interativos.',
          longDescription: 'HTML5 fornece elementos semânticos e APIs avançadas para criar aplicações web modernas e acessíveis.',
          examples: {
            semantic: {
              title: 'Estrutura Semântica',
              description: 'HTML5 moderno com navegação acessível.'
            },
            forms: {
              title: 'Formulários Acessíveis',
              description: 'Formulários HTML5 com validação nativa.'
            }
          }
        },
        css3: {
          name: 'CSS3',
          description: 'Estilização avançada com animações e layouts modernos.',
          longDescription: 'CSS3 permite criar interfaces visualmente impressionantes com animações, gradientes, flexbox, grid e muito mais.',
          examples: {
            animations: {
              title: 'Animações e Transições',
              description: 'Criação de animações suaves e interativas.'
            }
          }
        },
        angular: {
          name: 'Angular',
          description: 'Framework moderno com Signals, Reactive Forms e Componentes Standalone.',
          longDescription: 'Angular oferece arquitetura moderna: Signals para reatividade granular, Reactive Forms com validadores poderosos, Componentes Standalone para modularidade simplificada, e CLI avançado para build e deploy.',
          examples: {
            tasks: {
              title: 'Sistema de Tarefas Completo',
              description: 'Exemplo funcional de gerenciador de tarefas com Signals e Reactive Forms. Digite uma tarefa e pressione Enter ou clique no botão.'
            },
            signals: {
              title: 'Sinalização e Reatividade',
              description: 'Demonstração de Signals, Computed Values e Effects em tempo real.'
            }
          }
        },
        bootstrap: {
          name: 'Bootstrap',
          description: 'Framework CSS para layouts responsivos e componentes.',
          longDescription: 'Bootstrap oferece componentes prontos e um sistema de grid poderoso para criar interfaces responsivas rapidamente.',
          examples: {
            grid: {
              title: 'Sistema de Grid Responsivo',
              description: 'Layout completo com diferentes breakpoints (desktop/tablet/mobile).'
            },
            components: {
              title: 'Componentes Interativos',
              description: 'Cards, botões e badges com estilo Bootstrap.'
            }
          }
        },
        primeng: {
          name: 'PrimeNG',
          description: 'Biblioteca de componentes UI para Angular com temas modernos.',
          longDescription: 'PrimeNG oferece mais de 80 componentes UI ricos, theming avançado, acessibilidade e suporte a RTL. Foi utilizada extensivamente neste portfolio para criar interfaces profissionais com design dark theme personalizado.',
          examples: {
            portfolio: {
              title: 'Componentes em Ação no Portfolio',
              description: 'Exemplos reais de componentes PrimeNG usados aqui no site.'
            },
            theme: {
              title: 'Tema Dark Customizado',
              description: 'Integração com tema Lara Dark Blue e CSS customizado.'
            }
          }
        },
        git: {
          name: 'Git',
          description: 'Sistema de controle de versão distribuído.',
          longDescription: 'Git é essencial para desenvolvimento colaborativo, permitindo versionamento, branching e colaboração eficiente.',
          workflowSteps: {
            init: {
              title: 'Inicializar Repositório',
              description: 'Criar um novo repositório Git'
            },
            commits: {
              title: 'Fazer Commits',
              description: 'Salvar mudanças no repositório local'
            },
            branches: {
              title: 'Criar Branches',
              description: 'Trabalhar em features separadamente'
            },
            merge: {
              title: 'Merge & Pull Request',
              description: 'Integrar mudanças e revisar código'
            }
          },
          examples: {
            workflow: {
              title: 'Workflow Git Completo',
              description: 'Comandos do dia a dia em um projeto profissional.'
            }
          },
          demo: {
            steps: {
              init: {
                title: 'Inicializar Repositório',
                description: 'Criar um novo repositório Git e fazer commit inicial'
              },
              branch: {
                title: 'Criar Branch de Feature',
                description: 'Criar uma nova branch para desenvolver uma funcionalidade'
              },
              work: {
                title: 'Desenvolver e Commitar',
                description: 'Fazer mudanças no código e commitar com mensagens descritivas'
              },
              push: {
                title: 'Enviar para Remote',
                description: 'Enviar a branch para o repositório remoto'
              },
              pr: {
                title: 'Criar Pull Request',
                description: 'Abrir pull request para revisão do código'
              },
              merge: {
                title: 'Merge e Deploy',
                description: 'Aprovar e mesclar mudanças na branch principal'
              }
            }
          }
        },
        vscode: {
          name: 'VS Code',
          description: 'Editor de código com extensões poderosas.',
          longDescription: 'VS Code oferece debugging integrado, Git integrado, terminal embutido e milhares de extensões. Configurações otimizadas para desenvolvimento Angular com TypeScript.',
          workflowSteps: {
            extensions: {
              title: 'Extensões Essenciais',
              description: 'Angular Language Service, Prettier, ESLint'
            },
            debugging: {
              title: 'Debugging Avançado',
              description: 'Breakpoints, watch expressions e call stack'
            },
            git: {
              title: 'Git Integration',
              description: 'Controle de versão visual completo'
            },
            terminal: {
              title: 'Terminal Integrado',
              description: 'Execução de comandos sem trocar de janela'
            }
          },
          examples: {
            config: {
              title: 'Configuração Completa',
              description: 'Definições pessoais otimizadas para Angular 19+ e TypeScript.'
            }
          }
        }
      },

      modal: {
        exampleTitle: 'Exemplo Prático',
        codeTitle: 'Código do Exemplo:',
        readmeTitle: 'README Mini:',
        readme: {
          objective: '🎯 Objetivo',
          prerequisites: '📋 Pré-requisitos',
          howToRun: '🚀 Como executar',
          tips: '💡 Dicas',
          objectiveDesc: 'Demonstrar o uso prático desta tecnologia em um cenário real de desenvolvimento.',
          prerequisitesDesc: 'Conhecimento básico da tecnologia. Ambiente de desenvolvimento configurado.',
          howToRunDesc: 'Copie o código acima e execute em seu projeto. Modifique conforme necessário.',
          tipsDesc: 'Este exemplo pode ser adaptado para diferentes casos de uso. Experimente variar os parâmetros.'
        }
      },
      button: {
        viewExample: 'Ver Exemplo'
      }
    },
    experience: {
      title: 'Experiência Profissional',
      present: 'Presente',
      internship: 'Estágio',
      items: {
        nttData: {
          role: 'Desenvolvedor Front-End',
          company: 'NTT DATA Business Solutions (ex Conexos)',
          location: 'Remoto',
          period: 'Setembro 2023 – Maio 2026',
          responsibilities: [
            'Desenvolvimento de novas funcionalidades com Angular e AngularJS',
            'Participação na migração tecnológica de JavaScript para TypeScript',
            'Realização do novo menu principal da aplicação',
            'Desenvolvimento da interface do usuário para o projeto DUIMP (Documento Único de Importação)',
            'Integração com APIs REST',
            'Implementação de componentes responsivos via Bootstrap e Tailwind CSS',
            'Colaboração com equipes multidisciplinares seguindo metodologias Agile'
          ]
        },
        conexosIntern: {
          role: 'Estagiário de Desenvolvedor Front-End',
          company: 'Conexos',
          location: 'Remoto',
          period: 'Setembro 2022 – Setembro 2023',
          responsibilities: [
            'Desenvolvimento e manutenção de funcionalidades web utilizando AngularJS',
            'Implementação de interfaces responsivas',
            'Correção de bugs e manutenção evolutiva',
            'Suporte à equipe de desenvolvimento nas atividades diárias'
          ]
        }
      }
    },
projects: {
       title: 'Meus Projetos',
       viewProject: 'Ver Projeto',
       viewCode: 'Ver Código',
       viewDemo: 'Ver Demo',
       items: {
        medicalSystem: {
          title: 'PMS - Prescription Management System',
          description: 'Projeto universitário - Uma aplicação abrangente de gerenciamento de prescrições com autenticação de usuário, permitindo que médicos criem, gerenciem e acompanhem prescrições de pacientes com segurança.'
        },
        duimpInterface: {
          title: 'Interface DUIMP',
          description: 'Aplicação crítica de negócio desenvolvida na NTT DATA para gerenciar o Documento Único de Importação. Construída com Angular 19, apresentando formulários complexos e validação.'
        },
        mainMenuSystem: {
          title: 'Sistema de Menu Principal Empresarial',
          description: 'Modernizei o sistema de navegação principal na NTT DATA, migrando do legado AngularJS para Angular moderno com TypeScript, melhorando performance e manutenibilidade.'
        }
      }
    },
    contact: {
      title: 'Vamos Conversar',
      subtitle: 'Tem um projeto em mente? Vamos discutir como posso ajudar.',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        placeholders: {
          name: 'Seu nome',
          email: 'seu@email.com',
          message: 'Sua mensagem...'
        }
      },
      info: {
        email: 'Email',
        response: 'Respondo em até 24 horas'
      },
      success: 'Obrigado, {{name}}! Sua mensagem foi recebida. Entrarei em contato em {{email}} em breve.'
    },
    demos: {
      javascript: {
        title: 'Fibonacci Sequence Calculator',
        description: 'Enter a number between 0 and 20 to calculate the corresponding value in the Fibonacci sequence.',
        inputPlaceholder: 'Enter a number (0-20)',
        calculating: 'Calculating...',
        calculate: 'Calculate Fibonacci',
        result: 'Result',
        sequence: 'Sequence',
        examples: 'Examples',
        validation: 'Enter a number between 0 and 20'
      },
      typescript: {
        title: 'TypeScript Type Validation Demo',
        description: 'Test TypeScript type validation with different data types.',
        inputPlaceholder: 'Enter something like',
        validationPrompt: 'Enter something to see TypeScript validation',
        typeValidationPrompt: 'Test TypeScript type validation:',
        typeLabels: {
          string: 'String',
          number: 'Number',
          email: 'Email',
          boolean: 'Boolean'
        }
      },
      html5: {
        title: 'HTML5 Form with Native Validation',
        description: 'Demonstrate HTML5 validation with semantic elements and validation attributes.',
        labels: {
          name: 'Name',
          email: 'Email',
          age: 'Age',
          message: 'Message',
          contactInfo: 'Contact Information'
        },
        placeholders: {
          name: 'Enter your full name',
          email: 'your@email.com',
          age: 'Enter your age',
          message: 'Enter your message...'
        },
        validation: {
          nameRequired: 'Name is required',
          nameMinLength: 'Name must be at least 2 characters',
          nameMaxLength: 'Name must be at most 50 characters',
          emailRequired: 'Email is required',
          emailPattern: 'Email must have valid format',
          ageRequired: 'Age is required',
          ageMin: 'Age must be at least 18 years',
          ageMax: 'Age must be at most 120 years',
          messageRequired: 'Message is required',
          messageMinLength: 'Message must be at least 10 characters',
          messageMaxLength: 'Message must be at most 500 characters'
        },
        submit: 'Submit Form',
        clear: 'Clear',
        successMessage: 'Form submitted successfully!',
        dataReceived: 'Data received:',
        fieldLabels: {
          name: 'Name:',
          email: 'Email:',
          age: 'Age:',
          message: 'Message:'
        },
        helpText: {
          name: 'Name must be between 2 and 50 characters',
          message: 'Message must be between 10 and 500 characters'
        }
      },
      css3: {
        title: 'CSS3 Animations and Transitions',
        description: 'Explore smooth CSS3 animations, transitions and modern keyframes.',
        hoverTitle: 'Hover Effects',
        hoverText: 'Hover over',
        hoverActivate: 'Activate Hover',
        hoverDeactivate: 'Deactivate Hover',
        transformTitle: 'Transformations',
        transformStart: 'Start Transform',
        transformStop: 'Stop Transform',
        keyframeTitle: 'Keyframe Animations',
        keyframeStart: 'Start Bounce',
        keyframeStop: 'Stop Bounce',
        loadingTitle: 'Loading Spinner',
        loadingStart: 'Start Loading',
        loadingStop: 'Stop Loading',
        gradientTitle: 'Animated Gradients',
        gradientStart: 'Start Gradient',
        gradientStop: 'Stop Gradient',
        pulseTitle: 'Pulse Effect',
        pulseText: 'Notification',
        pulseStart: 'Start Pulse',
        pulseStop: 'Stop Pulse',
        controlsTitle: 'Advanced Controls',
        speedLabel: 'Animation Speed:',
        easingLabel: 'Easing Function:',
        resetAll: 'Reset All'
      },
      bootstrap: {
        title: 'Bootstrap Responsive Grid System',
        description: 'Explore how Bootstrap creates responsive layouts with breakpoints and flexible grid system.',
        viewModeLabel: 'View Mode:',
        viewModes: {
          desktop: 'Desktop',
          tablet: 'Tablet',
          mobile: 'Mobile'
        },
        dashboardTitle: 'Dashboard Analytics',
        dashboardSubtitle: 'System overview -',
        quickActionsTitle: 'Quick Actions',
        actions: {
          addProduct: 'Add Product',
          manageUsers: 'Manage Users',
          reports: 'Reports'
        },
        userManagementTitle: 'User Management',
        reportsTitle: 'System Reports',
        reportsData: {
          activeUsers: 'Active Users',
          sales: 'Sales',
          growth: 'Growth',
          rating: 'Rating'
        },
        feedback: {
          productAdded: 'Product added successfully!',
          userManagementEnabled: 'User management enabled',
          userManagementDisabled: 'User management disabled',
          reportsEnabled: 'Reports enabled',
          reportsDisabled: 'Reports disabled'
        }
      },
      angular: {
        title: 'Angular 19+ - Signals, Reactive Forms & Standalone Components',
        description: 'Demonstrate Angular\'s powerful modern features: Signals for granular reactivity, Reactive Forms with advanced validation, and Standalone Components for modular architecture.',
        signalsTitle: 'Signals & Reactivity',
        counterLabel: 'Counter',
        doubleLabel: 'Double:',
        squareLabel: 'Square:',
        statusLabel: 'Status:',
        formsTitle: 'Reactive Forms',
        taskInput: 'Enter a new task...',
        taskAdd: 'Add',
        taskRequired: 'Task is required',
        taskMinLength: 'Minimum 3 characters',
        priorityLow: 'Low',
        priorityMedium: 'Medium',
        priorityHigh: 'High',
        statsTotal: 'Total',
        statsPending: 'Pending',
        statsCompleted: 'Completed',
        formLabels: {
          email: 'Email',
          password: 'Password',
          confirmPassword: 'Confirm Password'
        },
        formPlaceholders: {
          email: 'your@email.com',
          password: 'Enter your password',
          confirmPassword: 'Confirm your password'
        },
        formValidation: {
          emailRequired: 'Email is required',
          emailInvalid: 'Email is invalid',
          passwordRequired: 'Password is required',
          passwordMinLength: 'Minimum 8 characters',
          passwordPattern: 'Must contain letter and number',
          confirmRequired: 'Confirmation is required',
          passwordMismatch: 'Passwords do not match'
        },
        formSubmit: 'Register',
        formClear: 'Clear',
        formStatus: {
          valid: 'Form valid',
          touched: 'Fields touched',
          dirty: 'Fields dirty'
        }
      },
      git: {
        title: 'Complete Git Workflow',
        description: 'Demonstrate a professional Git workflow with branching, organized commits and Pull Request integration.',
        workflowTitle: 'Workflow'
      },
      vscode: {
        title: 'VS Code - Complete Development Environment',
        description: 'Explore Visual Studio Code\'s powerful features: IntelliSense, advanced debugging, extensions and Git integration.',
        featuresTitle: 'Main Features'
      }
    },
    footer: {
      brand: 'Kenyson Oliveira Loureiro',
      tagline: 'Desenvolvedor Front-End especializado em Angular.',
      links: 'Links Rápidos',
      connect: 'Conectar',
      builtWith: 'Desenvolvido com Angular & TailwindCSS'
    },
    theme: {
      toggleLight: 'Mudar para Modo Claro',
      toggleDark: 'Mudar para Modo Escuro'
    }
  },
  en: {
    menu: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    header: {
      resume: 'Resume'
    },
    home: {
      greeting: 'Hi, I\'m',
      name: 'Kenyson Oliveira Loureiro',
      title: 'Front-End Developer',
      titlePrefix: '',
      titleHighlight: 'Front-End',
      titleSuffix: 'Developer',
      tagline: 'Creating amazing digital experiences with Angular.',
      ctaTouch: 'Get In Touch',
      ctaProjects: 'View Projects',
      scroll: 'Scroll down'
    },
    about: {
      title: 'About Me',
      intro: 'Front-End Developer with experience in developing and modernizing enterprise web applications using Angular, AngularJS, TypeScript and modern web technologies. I have participated in digital transformation projects for the logistics and customs sector, contributing to the migration of legacy systems to modern architectures and the development of new features with high operational impact. I stand out for problem-solving skills, collaboration in Agile teams, attention to code quality and continuous learning. I am looking for opportunities to grow professionally in innovative and international contexts.',
      details: {
        location: 'Location',
        nationality: 'Nationality',
        age: 'Age',
        languages: 'Languages'
      },
education: {
         title: 'Education',
         degree: 'Bachelor of Software Engineering',
         university: 'Unicesumar',
         date: 'Paraná – Brazil',
         dateComplete: 'Completed in December 2023.'
       },
       softSkills: {
         title: 'Soft Skills',
         items: [
           'Problem Solving',
           'Team Working',
           'Effective Communication',
           'Fast Learning',
           'Adaptability',
           'Priority Management',
           'Attention to Detail',
           'Results Orientation',
           'Operational Autonomy'
         ]
       }
     },
    skills: {
      title: 'My Skills',
      categories: {
        languages: 'Languages',
        frontend: 'Frontend Frameworks',
        tools: 'Tools & Platforms'
      },
      welcome: {
        title: 'Explore my skills',
        description: 'Select a technology from the sidebar to see interactive demos, practical examples, and details about my knowledge.'
      },
      stats: {
        technologies: 'Technologies',

        categories: 'Categories'
      },
      examples: 'Practical Examples',
      projectsUsing: 'Projects Using',
      demoPlaceholder: 'Demo for - In development',
      items: {
        javascript: {
          name: 'JavaScript',
          description: 'Essential programming language for modern web development.',
          longDescription: 'JavaScript is the base language for web development, allowing to create interactive and dynamic applications both on front-end and back-end.',
          examples: {
            fibonacci: {
              title: 'Recursive Fibonacci Function',
              description: 'Efficient implementation of Fibonacci sequence calculation.'
            },
            arrays: {
              title: 'Array Manipulation',
              description: 'Modern array operations using functional methods.'
            }
          }
        },
        typescript: {
          name: 'TypeScript',
          description: 'Typed superset of JavaScript with real-time validation.',
          longDescription: 'TypeScript adds static typing to JavaScript, preventing development-time errors and improving code maintenance through real-time type validation.',
          examples: {
            types: {
              title: 'Type System in Action',
              description: 'See how TypeScript validates types and prevents errors.'
            },
            generics: {
              title: 'Generics and Interfaces',
              description: 'Reusable typed APIs with generics.'
            }
          }
        },
        html5: {
          name: 'HTML5',
          description: 'Modern semantic structure with interactive elements.',
          longDescription: 'HTML5 provides semantic elements and advanced APIs to create modern and accessible web applications.',
          examples: {
            semantic: {
              title: 'Semantic Structure',
              description: 'Modern HTML5 with accessible navigation.'
            },
            forms: {
              title: 'Accessible Forms',
              description: 'HTML5 forms with native validation.'
            }
          }
        },
        css3: {
          name: 'CSS3',
          description: 'Advanced styling with animations and modern layouts.',
          longDescription: 'CSS3 allows creating visually impressive interfaces with animations, gradients, flexbox, grid and much more.',
          examples: {
            animations: {
              title: 'Animations and Transitions',
              description: 'Creating smooth and interactive animations.'
            }
          }
        },
        angular: {
          name: 'Angular',
          description: 'Modern framework with Signals, Reactive Forms and Standalone Components.',
          longDescription: 'Angular offers modern architecture: Signals for granular reactivity, Reactive Forms with powerful validators, Standalone Components for simplified modularity, and advanced CLI for build and deploy.',
          examples: {
            tasks: {
              title: 'Complete Task System',
              description: 'Functional example of task manager with Signals and Reactive Forms. Type a task and press Enter or click the button.'
            },
            signals: {
              title: 'Signaling and Reactivity',
              description: 'Demonstration of Signals, Computed Values and Effects in real time.'
            }
          }
        },
        bootstrap: {
          name: 'Bootstrap',
          description: 'CSS framework for responsive layouts and components.',
          longDescription: 'Bootstrap offers ready-made components and a powerful grid system to create responsive interfaces quickly.',
          examples: {
            grid: {
              title: 'Responsive Grid System',
              description: 'Complete layout with different breakpoints (desktop/tablet/mobile).'
            },
            components: {
              title: 'Interactive Components',
              description: 'Cards, buttons and badges with Bootstrap styling.'
            }
          }
        },
        primeng: {
          name: 'PrimeNG',
          description: 'UI component library for Angular with modern themes.',
          longDescription: 'PrimeNG offers more than 80 rich UI components, advanced theming, accessibility and RTL support. It was extensively used in this portfolio to create professional interfaces with custom dark theme design.',
          examples: {
            portfolio: {
              title: 'Components in Action in Portfolio',
              description: 'Real examples of PrimeNG components used on this site.'
            },
            theme: {
              title: 'Custom Dark Theme',
              description: 'Integration with Lara Dark Blue theme and custom CSS.'
            }
          }
        },
        git: {
          name: 'Git',
          description: 'Distributed version control system.',
          longDescription: 'Git is essential for collaborative development, allowing versioning, branching and efficient collaboration.',
          workflowSteps: {
            init: {
              title: 'Initialize Repository',
              description: 'Create a new Git repository'
            },
            commits: {
              title: 'Make Commits',
              description: 'Save changes to local repository'
            },
            branches: {
              title: 'Create Branches',
              description: 'Work on features separately'
            },
            merge: {
              title: 'Merge & Pull Request',
              description: 'Integrate changes and review code'
            }
          },
          examples: {
            workflow: {
              title: 'Complete Git Workflow',
              description: 'Daily commands in a professional project.'
            }
          },
          demo: {
            steps: {
              init: {
                title: 'Initialize Repository',
                description: 'Create a new Git repository and make initial commit'
              },
              branch: {
                title: 'Create Feature Branch',
                description: 'Create a new branch to develop a feature'
              },
              work: {
                title: 'Develop and Commit',
                description: 'Make code changes and commit with descriptive messages'
              },
              push: {
                title: 'Push to Remote',
                description: 'Push the branch to the remote repository'
              },
              pr: {
                title: 'Create Pull Request',
                description: 'Open pull request for code review'
              },
              merge: {
                title: 'Merge and Deploy',
                description: 'Approve and merge changes to main branch'
              }
            }
          }
        },
        vscode: {
          name: 'VS Code',
          description: 'Code editor with powerful extensions.',
          longDescription: 'VS Code offers integrated debugging, integrated Git, embedded terminal and thousands of extensions. Optimized settings for Angular development with TypeScript.',
          workflowSteps: {
            extensions: {
              title: 'Essential Extensions',
              description: 'Angular Language Service, Prettier, ESLint'
            },
            debugging: {
              title: 'Advanced Debugging',
              description: 'Breakpoints, watch expressions and call stack'
            },
            git: {
              title: 'Git Integration',
              description: 'Complete visual version control'
            },
            terminal: {
              title: 'Integrated Terminal',
              description: 'Execute commands without switching windows'
            }
          },
          examples: {
            config: {
              title: 'Complete Configuration',
              description: 'Personal settings optimized for Angular 19+ and TypeScript.'
            }
          }
        }
      },

      modal: {
        exampleTitle: 'Practical Example',
        codeTitle: 'Example Code:',
        readmeTitle: 'Mini README:',
        readme: {
          objective: '🎯 Objective',
          prerequisites: '📋 Prerequisites',
          howToRun: '🚀 How to run',
          tips: '💡 Tips',
          objectiveDesc: 'Demonstrate the practical use of this technology in a real development scenario.',
          prerequisitesDesc: 'Basic knowledge of the technology. Configured development environment.',
          howToRunDesc: 'Copy the code above and run it in your project. Modify as needed.',
          tipsDesc: 'This example can be adapted for different use cases. Try varying the parameters.'
        }
      },
      button: {
        viewExample: 'View Example'
      }
    },
    experience: {
      title: 'Professional Experience',
      present: 'Present',
      internship: 'Internship',
      items: {
        nttData: {
          role: 'Front-End Developer',
          company: 'NTT DATA Business Solutions (ex Conexos)',
          location: 'Remote',
          period: 'September 2023 – May 2026',
          responsibilities: [
            'Development of new features with Angular and AngularJS',
            'Participation in technological migration from JavaScript to TypeScript',
            'Creation of the new main application menu',
            'Development of the user interface for the DUIMP project (Single Import Document)',
            'Integration with REST APIs',
            'Implementation of responsive components via Bootstrap and Tailwind CSS',
            'Collaboration with multidisciplinary teams following Agile methodologies'
          ]
        },
        conexosIntern: {
          role: 'Front-End Developer Intern',
          company: 'Conexos',
          location: 'Remote',
          period: 'September 2022 – September 2023',
          responsibilities: [
            'Development and maintenance of web features using AngularJS',
            'Implementation of responsive interfaces',
            'Bug fixing and evolutionary maintenance',
            'Support to the development team in daily activities'
          ]
        }
      }
    },
projects: {
       title: 'My Projects',
       viewProject: 'View Project',
       viewCode: 'View Code',
       viewDemo: 'View Demo',
       items: {
        medicalSystem: {
          title: 'PMS - Prescription Management System',
          description: 'University project - A comprehensive prescription management application with user authentication, allowing doctors to create, manage, and track patient prescriptions securely.'
        },
        duimpInterface: {
          title: 'DUIMP Interface',
          description: 'Critical business application developed at NTT DATA for managing the Single Document for Importation. Built with Angular 19, featuring complex forms and validation.'
        },
        mainMenuSystem: {
          title: 'Enterprise Main Menu System',
          description: 'Modernized the main navigation system at NTT DATA, migrating from legacy AngularJS to modern Angular with TypeScript, improving performance and maintainability.'
        }
      }
    },
    contact: {
      title: 'Let\'s Talk',
      subtitle: 'Have a project in mind? Let\'s discuss how I can help.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'Your name',
          email: 'your@email.com',
          message: 'Your message...'
        }
      },
      info: {
        email: 'Email',
        response: 'I respond within 24 hours'
      },
      success: 'Thank you, {{name}}! Your message has been received. I\'ll get back to you at {{email}} soon.'
    },
    demos: {
      javascript: {
        title: 'Cálculo da Sequência de Fibonacci',
        description: 'Digite um número entre 0 e 20 para calcular o valor correspondente na sequência de Fibonacci.',
        inputPlaceholder: 'Digite um número (0-20)',
        calculating: 'Calculando...',
        calculate: 'Calcular Fibonacci',
        result: 'Resultado',
        sequence: 'Sequência',
        examples: 'Exemplos',
        validation: 'Digite um número entre 0 e 20'
      },
      typescript: {
        title: 'Validação de Tipos TypeScript',
        description: 'Teste validação de tipos TypeScript com diferentes tipos de dados.',
        inputPlaceholder: 'Digite algo como',
        validationPrompt: 'Digite algo para ver a validação TypeScript',
        typeValidationPrompt: 'Teste validação de tipos TypeScript:',
        typeLabels: {
          string: 'String',
          number: 'Number',
          email: 'Email',
          boolean: 'Boolean'
        }
      },
      html5: {
        title: 'Formulário HTML5 com Validação Nativa',
        description: 'Demonstre validação HTML5 com elementos semânticos e atributos de validação.',
        labels: {
          name: 'Nome',
          email: 'Email',
          age: 'Idade',
          message: 'Mensagem',
          contactInfo: 'Informações de Contato'
        },
        placeholders: {
          name: 'Digite seu nome completo',
          email: 'seu@email.com',
          age: 'Digite sua idade',
          message: 'Digite sua mensagem...'
        },
        validation: {
          nameRequired: 'Nome é obrigatório',
          nameMinLength: 'Nome deve ter pelo menos 2 caracteres',
          nameMaxLength: 'Nome deve ter no máximo 50 caracteres',
          emailRequired: 'Email é obrigatório',
          emailPattern: 'Email deve ter formato válido',
          ageRequired: 'Idade é obrigatória',
          ageMin: 'Idade deve ser pelo menos 18 anos',
          ageMax: 'Idade deve ser no máximo 120 anos',
          messageRequired: 'Mensagem é obrigatória',
          messageMinLength: 'Mensagem deve ter pelo menos 10 caracteres',
          messageMaxLength: 'Mensagem deve ter no máximo 500 caracteres'
        },
        submit: 'Enviar Formulário',
        clear: 'Limpar',
        successMessage: 'Formulário enviado com sucesso!',
        dataReceived: 'Dados recebidos:',
        fieldLabels: {
          name: 'Nome:',
          email: 'Email:',
          age: 'Idade:',
          message: 'Mensagem:'
        },
        helpText: {
          name: 'Nome deve ter entre 2 e 50 caracteres',
          message: 'Mensagem deve ter entre 10 e 500 caracteres'
        }
      },
      css3: {
        title: 'Animações e Transições CSS3',
        description: 'Explore animações suaves, transições e keyframes modernos do CSS3.',
        hoverTitle: 'Efeitos de Hover',
        hoverText: 'Passe o mouse',
        hoverActivate: 'Ativar Hover',
        hoverDeactivate: 'Desativar Hover',
        transformTitle: 'Transformações',
        transformStart: 'Iniciar Transform',
        transformStop: 'Parar Transform',
        keyframeTitle: 'Animações Keyframe',
        keyframeStart: 'Iniciar Bounce',
        keyframeStop: 'Parar Bounce',
        loadingTitle: 'Loading Spinner',
        loadingStart: 'Iniciar Loading',
        loadingStop: 'Parar Loading',
        gradientTitle: 'Gradientes Animados',
        gradientStart: 'Iniciar Gradiente',
        gradientStop: 'Parar Gradiente',
        pulseTitle: 'Efeito Pulse',
        pulseText: 'Notificação',
        pulseStart: 'Iniciar Pulse',
        pulseStop: 'Parar Pulse',
        controlsTitle: 'Controles Avançados',
        speedLabel: 'Velocidade da Animação:',
        easingLabel: 'Função de Easing:',
        resetAll: 'Resetar Todas'
      },
      bootstrap: {
        title: 'Sistema de Grid Responsivo Bootstrap',
        description: 'Explore como o Bootstrap cria layouts responsivos com breakpoints e sistema de grid flexível.',
        viewModeLabel: 'Modo de Visualização:',
        viewModes: {
          desktop: 'Desktop',
          tablet: 'Tablet',
          mobile: 'Mobile'
        },
        dashboardTitle: 'Dashboard Analytics',
        dashboardSubtitle: 'Visão geral do sistema -',
        quickActionsTitle: 'Ações Rápidas',
        actions: {
          addProduct: 'Novo Produto',
          manageUsers: 'Gerenciar Usuários',
          reports: 'Relatórios'
        },
        userManagementTitle: 'Gerenciamento de Usuários',
        reportsTitle: 'Relatórios do Sistema',
        reportsData: {
          activeUsers: 'Usuários Ativos',
          sales: 'Vendas',
          growth: 'Crescimento',
          rating: 'Avaliação'
        },
        feedback: {
          productAdded: 'Produto adicionado com sucesso!',
          userManagementEnabled: 'Gerenciamento de usuários ativado',
          userManagementDisabled: 'Gerenciamento de usuários desativado',
          reportsEnabled: 'Relatórios ativados',
          reportsDisabled: 'Relatórios desativados'
        }
      },
      angular: {
        title: 'Angular 19+ - Signals, Reactive Forms & Componentes Standalone',
        description: 'Demonstre as poderosas funcionalidades modernas do Angular: Signals para reatividade granular, Reactive Forms com validação avançada, e Componentes Standalone para arquitetura modular.',
        signalsTitle: 'Signals & Reatividade',
        counterLabel: 'Contador',
        doubleLabel: 'Dobro:',
        squareLabel: 'Quadrado:',
        statusLabel: 'Status:',
        formsTitle: 'Reactive Forms',
        taskInput: 'Digite uma nova tarefa...',
        taskAdd: 'Adicionar',
        taskRequired: 'Tarefa é obrigatória',
        taskMinLength: 'Mínimo 3 caracteres',
        priorityLow: 'Baixa',
        priorityMedium: 'Média',
        priorityHigh: 'Alta',
        statsTotal: 'Total',
        statsPending: 'Pendentes',
        statsCompleted: 'Concluídas',
        formLabels: {
          email: 'Email',
          password: 'Senha',
          confirmPassword: 'Confirmar Senha'
        },
        formPlaceholders: {
          email: 'seu@email.com',
          password: 'Digite sua senha',
          confirmPassword: 'Confirme sua senha'
        },
        formValidation: {
          emailRequired: 'Email é obrigatório',
          emailInvalid: 'Email inválido',
          passwordRequired: 'Senha é obrigatória',
          passwordMinLength: 'Mínimo 8 caracteres',
          passwordPattern: 'Deve conter letra e número',
          confirmRequired: 'Confirmação é obrigatória',
          passwordMismatch: 'Senhas não coincidem'
        },
        formSubmit: 'Cadastrar',
        formClear: 'Limpar',
        formStatus: {
          valid: 'Form válido',
          touched: 'Campos tocados',
          dirty: 'Campos sujos'
        }
      },
      git: {
        title: 'Git Workflow Completo',
        description: 'Demonstre um workflow profissional de Git com branching, commits organizados e integração via Pull Request.',
        workflowTitle: 'Fluxo de Trabalho'
      },
      vscode: {
        title: 'VS Code - Ambiente de Desenvolvimento Completo',
        description: 'Explore as poderosas funcionalidades do Visual Studio Code: IntelliSense, debugging avançado, extensões e integração com Git.',
        featuresTitle: 'Funcionalidades Principais'
      }
    },
    footer: {
      brand: 'Kenyson Oliveira Loureiro',
      tagline: 'Full-Stack Developer creating amazing digital experiences.',
      links: 'Quick Links',
      connect: 'Connect',
      builtWith: 'Built with Angular & TailwindCSS'
    },
    theme: {
      toggleLight: 'Switch to Light Mode',
      toggleDark: 'Switch to Dark Mode'
    }
  },
  it: {
    menu: {
      home: 'Home',
      about: 'Su di me',
      skills: 'Competenze',
      experience: 'Esperienza',
      projects: 'Progetti',
      contact: 'Contatto'
    },
    header: {
      resume: 'Curriculum'
    },
    home: {
      greeting: 'Ciao, sono',
      name: 'Kenyson Oliveira Loureiro',
      title: 'Sviluppatore Front-End',
      titlePrefix: 'Sviluppatore',
      titleHighlight: 'Front-End',
      titleSuffix: '',
      tagline: 'Creando esperienze digitali eccezionali con Angular.',
      ctaTouch: 'Mettiti in Contatto',
      ctaProjects: 'Vedi Progetti',
      scroll: 'Scorri verso il basso'
    },
    about: {
      title: 'Su di Me',
      intro: 'Front-End Developer con esperienza nello sviluppo e nella modernizzazione di applicazioni web enterprise utilizzando Angular, AngularJS, TypeScript e tecnologie moderne del web. Ho partecipato a progetti di trasformazione digitale per il settore logistico e doganale, contribuendo alla migrazione di sistemi legacy verso architetture moderne e allo sviluppo di nuove funzionalità ad alto impatto operativo. Mi distinguo per capacità di problem solving, collaborazione in team Agile, attenzione alla qualidade del codice e apprendimento continuo. Sono alla ricerca di opportunità che mi permettano di crescere professionalmente in contesti innovativi e internazionali.',
      details: {
        location: 'Posizione',
        nationality: 'Nazionalità',
        age: 'Età',
        languages: 'Lingue'
      },
education: {
         title: 'Formazione',
         degree: 'Laurea in Ingegneria del Software',
         university: 'Unicesumar',
         date: 'Paraná – Brasile',
         dateComplete: 'Conseguita nel dicembre 2023.'
       },
       softSkills: {
         title: 'Soft Skills',
         items: [
           'Problem Solving',
           'Lavoro di Squadra',
           'Comunicazione Efficace',
           'Apprendimento Rapido',
           'Adattabilità',
           'Gestione delle Priorità',
           'Attenzione ai Dettagli',
           'Orientamento ai Risultati',
           'Autonomia Operativa'
         ]
       }
     },
    skills: {
      title: 'Le Mie Competenze',
      categories: {
        languages: 'Linguaggi',
        frontend: 'Framework Frontend',
        tools: 'Strumenti e Piattaforme'
      },
      welcome: {
        title: 'Esplora le mie competenze',
        description: 'Seleziona una tecnologia dalla barra laterale per vedere demo interattive, esempi pratici e dettagli sulle mie conoscenze.'
      },
      stats: {
        technologies: 'Tecnologie',

        categories: 'Categorie'
      },
      examples: 'Esempi Pratici',
      projectsUsing: 'Progetti Utilizzando',
      demoPlaceholder: 'Demo per - In sviluppo',
      items: {
        javascript: {
          name: 'JavaScript',
          description: 'Linguaggio di programmazione essenziale per lo sviluppo web moderno.',
          longDescription: 'JavaScript è il linguaggio base per lo sviluppo web, permettendo di creare applicazioni interattive e dinamiche sia nel front-end che nel back-end.',
          examples: {
            fibonacci: {
              title: 'Funzione Fibonacci Ricorsiva',
              description: 'Implementazione efficiente del calcolo della sequenza di Fibonacci.'
            },
            arrays: {
              title: 'Manipolazione degli Array',
              description: 'Operazioni moderne sugli array utilizzando metodi funzionali.'
            }
          }
        },
        typescript: {
          name: 'TypeScript',
          description: 'Superset tipizzato di JavaScript con validazione in tempo reale.',
          longDescription: 'TypeScript aggiunge tipizzazione statica a JavaScript, prevenendo errori in fase di sviluppo e migliorando la manutenzione del codice attraverso la validazione dei tipi in tempo reale.',
          examples: {
            types: {
              title: 'Sistema di Tipi in Azione',
              description: 'Vedi come TypeScript valida i tipi e previene gli errori.'
            },
            generics: {
              title: 'Generics e Interfacce',
              description: 'API tipizzate riutilizzabili con generics.'
            }
          }
        },
        html5: {
          name: 'HTML5',
          description: 'Struttura semantica moderna con elementi interattivi.',
          longDescription: 'HTML5 fornisce elementi semantici e API avanzate per creare applicazioni web moderne e accessibili.',
          examples: {
            semantic: {
              title: 'Struttura Semantica',
              description: 'HTML5 moderno con navigazione accessibile.'
            },
            forms: {
              title: 'Moduli Accessibili',
              description: 'Moduli HTML5 con validazione nativa.'
            }
          }
        },
        css3: {
          name: 'CSS3',
          description: 'Stilizzazione avanzata con animazioni e layout moderni.',
          longDescription: 'CSS3 permette di creare interfacce visivamente impressionanti con animazioni, gradienti, flexbox, grid e molto altro.',
          examples: {
            animations: {
              title: 'Animazioni e Transizioni',
              description: 'Creazione di animazioni fluide e interattive.'
            }
          }
        },
        angular: {
          name: 'Angular',
          description: 'Framework moderno con Signals, Reactive Forms e Componenti Standalone.',
          longDescription: 'Angular offre architettura moderna: Signals per reattività granulare, Reactive Forms con validatori potenti, Componenti Standalone per modularità semplificata, e CLI avanzato per build e deploy.',
          examples: {
            tasks: {
              title: 'Sistema di Compiti Completo',
              description: 'Esempio funzionale di gestore di compiti con Signals e Reactive Forms. Digita un compito e premi Enter o clicca il pulsante.'
            },
            signals: {
              title: 'Segnalazione e Reattività',
              description: 'Dimostrazione di Signals, Computed Values e Effects in tempo reale.'
            }
          }
        },
        bootstrap: {
          name: 'Bootstrap',
          description: 'Framework CSS per layout responsivi e componenti.',
          longDescription: 'Bootstrap offre componenti pronti e un potente sistema di grid per creare interfacce responsivi rapidamente.',
          examples: {
            grid: {
              title: 'Sistema di Grid Responsivo',
              description: 'Layout completo con diversi breakpoint (desktop/tablet/mobile).'
            },
            components: {
              title: 'Componenti Interattivi',
              description: 'Carte, pulsanti e badge con stile Bootstrap.'
            }
          }
        },
        primeng: {
          name: 'PrimeNG',
          description: 'Libreria di componenti UI per Angular con temi moderni.',
          longDescription: 'PrimeNG offre più di 80 componenti UI ricchi, theming avanzato, accessibilità e supporto RTL. È stata utilizzata estesamente in questo portfolio per creare interfacce professionali con design tema scuro personalizzato.',
          examples: {
            portfolio: {
              title: 'Componenti in Azione nel Portfolio',
              description: 'Esempi reali di componenti PrimeNG utilizzati su questo sito.'
            },
            theme: {
              title: 'Tema Dark Personalizzato',
              description: 'Integrazione con tema Lara Dark Blue e CSS personalizzato.'
            }
          }
        },
        git: {
          name: 'Git',
          description: 'Sistema di controllo versione distribuito.',
          longDescription: 'Git è essenziale per lo sviluppo collaborativo, permettendo versionamento, branching e collaborazione efficiente.',
          workflowSteps: {
            init: {
              title: 'Inizializzare Repository',
              description: 'Creare un nuovo repository Git'
            },
            commits: {
              title: 'Fare Commit',
              description: 'Salvare modifiche nel repository locale'
            },
            branches: {
              title: 'Creare Branches',
              description: 'Lavorare su funzionalità separatamente'
            },
            merge: {
              title: 'Merge & Pull Request',
              description: 'Integrare modifiche e revisionare codice'
            }
          },
          examples: {
            workflow: {
              title: 'Workflow Git Completo',
              description: 'Comandi quotidiani in un progetto professionale.'
            }
          },
          demo: {
            steps: {
              init: {
                title: 'Inizializzare Repository',
                description: 'Creare un nuovo repository Git e fare commit iniziale'
              },
              branch: {
                title: 'Creare Branch di Feature',
                description: 'Creare una nuova branch per sviluppare una funzionalità'
              },
              work: {
                title: 'Sviluppare e Commitare',
                description: 'Fare modifiche al codice e committare con messaggi descrittivi'
              },
              push: {
                title: 'Inviare a Remote',
                description: 'Inviare la branch al repository remoto'
              },
              pr: {
                title: 'Creare Pull Request',
                description: 'Aprire pull request per revisione del codice'
              },
              merge: {
                title: 'Merge e Deploy',
                description: 'Approvare e unire modifiche alla branch principale'
              }
            }
          }
        },
        vscode: {
          name: 'VS Code',
          description: 'Editor di codice con estensioni potenti.',
          longDescription: 'VS Code offre debugging integrato, Git integrato, terminale incorporato e migliaia di estensioni. Impostazioni ottimizzate per sviluppo Angular con TypeScript.',
          workflowSteps: {
            extensions: {
              title: 'Estensioni Essenziali',
              description: 'Angular Language Service, Prettier, ESLint'
            },
            debugging: {
              title: 'Debugging Avanzato',
              description: 'Breakpoints, watch expressions e call stack'
            },
            git: {
              title: 'Integrazione Git',
              description: 'Controllo versione visuale completo'
            },
            terminal: {
              title: 'Terminale Integrato',
              description: 'Eseguire comandi senza cambiare finestra'
            }
          },
          examples: {
            config: {
              title: 'Configurazione Completa',
              description: 'Impostazioni personali ottimizzate per Angular 19+ e TypeScript.'
            }
          }
        }
      },

      modal: {
        exampleTitle: 'Esempio Pratico',
        codeTitle: 'Codice dell\'Esempio:',
        readmeTitle: 'Mini README:',
        readme: {
          objective: '🎯 Obiettivo',
          prerequisites: '📋 Prerequisiti',
          howToRun: '🚀 Come eseguire',
          tips: '💡 Suggerimenti',
          objectiveDesc: 'Dimostrare l\'uso pratico di questa tecnologia in uno scenario di sviluppo reale.',
          prerequisitesDesc: 'Conoscenza base della tecnologia. Ambiente di sviluppo configurato.',
          howToRunDesc: 'Copia il codice sopra ed eseguilo nel tuo progetto. Modifica secondo necessità.',
          tipsDesc: 'Questo esempio può essere adattato per diversi casi d\'uso. Prova a variare i parametri.'
        }
      },
      button: {
        viewExample: 'Vedi Esempio'
      }
    },
    experience: {
      title: 'Esperienza Professionale',
      present: 'Presente',
      internship: 'Stage',
      items: {
        nttData: {
          role: 'Sviluppatore Front-End',
          company: 'NTT DATA Business Solutions (ex Conexos)',
          location: 'Remoto',
          period: 'Settembre 2023 – Maggio 2026',
          responsibilities: [
            'Sviluppo di nuove funzionalità con Angular e AngularJS',
            'Partecipazione alla migrazione tecnologica da JavaScript a TypeScript',
            'Realizzazione del nuovo menu principale dell\'applicazione',
            'Sviluppo dell\'interfaccia utente per il progetto DUIMP (Documento Unico di Importazione)',
            'Integrazione con API REST',
            'Implementazione di componenti responsive tramite Bootstrap e Tailwind CSS',
            'Collaborazione con team multidisciplinari seguendo metodologie Agile'
          ]
        },
        conexosIntern: {
          role: 'Tirocinante Sviluppatore Front-End',
          company: 'Conexos',
          location: 'Remoto',
          period: 'Settembre 2022 – Settembre 2023',
          responsibilities: [
            'Sviluppo e manutenzione di funzionalità web utilizzando AngularJS',
            'Implementazione di interfacce responsive',
            'Correzione bug e manutenzione evolutiva',
            'Supporto al team di sviluppo nelle attività quotidiane'
          ]
        }
      }
    },
projects: {
       title: 'I Miei Progetti',
       viewProject: 'Vedi Progetto',
       viewCode: 'Vedi Codice',
       viewDemo: 'Vedi Demo',
       items: {
        medicalSystem: {
          title: 'PMS - Prescription Management System',
          description: 'Progetto universitario - Un\'applicazione completa di gestione delle prescrizioni con autenticazione utente, che permette ai medici di creare, gestire e tracciare le prescrizioni dei pazienti in sicurezza.'
        },
        duimpInterface: {
          title: 'Interfaccia DUIMP',
          description: 'Applicazione business critica sviluppata presso NTT DATA per gestire il Documento Unico di Importazione. Costruita con Angular 19, presenta moduli complessi e validazione.'
        },
        mainMenuSystem: {
          title: 'Sistema Menu Principale Aziendale',
          description: 'Ho modernizzato il sistema di navigazione principale presso NTT DATA, migrando dal legacy AngularJS all\'Angular moderno con TypeScript, migliorando prestazioni e manutenibilità.'
        }
      }
    },
    contact: {
      title: 'Parliamone',
      subtitle: 'Hai un progetto in mente? Discutiamo di come posso aiutarti.',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Messaggio',
        send: 'Invia Messaggio',
        placeholders: {
          name: 'Il tuo nome',
          email: 'tua@email.com',
          message: 'Il tuo messaggio...'
        }
      },
      info: {
        email: 'Email',
        response: 'Rispondo entro 24 ore'
      },
      success: 'Grazie, {{name}}! Il tuo messaggio è stato ricevuto. Ti risponderò a {{email}} presto.'
    },
    demos: {
      javascript: {
        title: 'Calcolo della Sequenza di Fibonacci',
        description: 'Inserisci un numero tra 0 e 20 per calcolare il valore corrispondente nella sequenza di Fibonacci.',
        inputPlaceholder: 'Inserisci un numero (0-20)',
        calculating: 'Calcolo...',
        calculate: 'Calcola Fibonacci',
        result: 'Risultato',
        sequence: 'Sequenza',
        examples: 'Esempi',
        validation: 'Inserisci un numero compreso tra 0 e 20'
      },
      typescript: {
        title: 'Validazione Tipi TypeScript',
        description: 'Testa la validazione dei tipi TypeScript con diversi tipi di dati.',
        inputPlaceholder: 'Scrivi qualcosa come',
        validationPrompt: 'Scrivi qualcosa per vedere la validazione TypeScript',
        typeValidationPrompt: 'Testa validazione tipi TypeScript:',
        typeLabels: {
          string: 'Stringa',
          number: 'Numero',
          email: 'Email',
          boolean: 'Booleano'
        }
      },
      html5: {
        title: 'Modulo HTML5 con Validazione Nativa',
        description: 'Dimostra la validazione HTML5 con elementi semantici e attributi di validazione.',
        labels: {
          name: 'Nome',
          email: 'Email',
          age: 'Età',
          message: 'Messaggio',
          contactInfo: 'Informazioni di Contatto'
        },
        placeholders: {
          name: 'Inserisci il tuo nome completo',
          email: 'tua@email.com',
          age: 'Inserisci la tua età',
          message: 'Inserisci il tuo messaggio...'
        },
        validation: {
          nameRequired: 'Il nome è obbligatorio',
          nameMinLength: 'Il nome deve essere di almeno 2 caratteri',
          nameMaxLength: 'Il nome deve essere di massimo 50 caratteri',
          emailRequired: 'L\'email è obbligatoria',
          emailPattern: 'L\'email deve avere un formato valido',
          ageRequired: 'L\'età è obbligatoria',
          ageMin: 'L\'età deve essere di almeno 18 anni',
          ageMax: 'L\'età deve essere di massimo 120 anni',
          messageRequired: 'Il messaggio è obbligatorio',
          messageMinLength: 'Il messaggio deve essere di almeno 10 caratteri',
          messageMaxLength: 'Il messaggio deve essere di massimo 500 caratteri'
        },
        submit: 'Invia Modulo',
        clear: 'Cancella',
        successMessage: 'Modulo inviato con successo!',
        dataReceived: 'Dati ricevuti:',
        fieldLabels: {
          name: 'Nome:',
          email: 'Email:',
          age: 'Età:',
          message: 'Messaggio:'
        },
        helpText: {
          name: 'Il nome deve essere tra 2 e 50 caratteri',
          message: 'Il messaggio deve essere tra 10 e 500 caratteri'
        }
      },
      css3: {
        title: 'Animazioni e Transizioni CSS3',
        description: 'Esplora animazioni fluide, transizioni e keyframes moderni di CSS3.',
        hoverTitle: 'Effetti Hover',
        hoverText: 'Passa il mouse',
        hoverActivate: 'Attiva Hover',
        hoverDeactivate: 'Disattiva Hover',
        transformTitle: 'Trasformazioni',
        transformStart: 'Avvia Trasformazione',
        transformStop: 'Ferma Trasformazione',
        keyframeTitle: 'Animazioni Keyframe',
        keyframeStart: 'Avvia Rimbalzo',
        keyframeStop: 'Ferma Rimbalzo',
        loadingTitle: 'Spinner di Caricamento',
        loadingStart: 'Avvia Caricamento',
        loadingStop: 'Ferma Caricamento',
        gradientTitle: 'Gradienti Animati',
        gradientStart: 'Avvia Gradiente',
        gradientStop: 'Ferma Gradiente',
        pulseTitle: 'Effetto Pulse',
        pulseText: 'Notifica',
        pulseStart: 'Avvia Pulse',
        pulseStop: 'Ferma Pulse',
        controlsTitle: 'Controlli Avanzati',
        speedLabel: 'Velocità Animazione:',
        easingLabel: 'Funzione Easing:',
        resetAll: 'Ripristina Tutto'
      },
      bootstrap: {
        title: 'Sistema Grid Responsivo Bootstrap',
        description: 'Esplora come Bootstrap crea layout responsivi con breakpoint e sistema grid flessibile.',
        viewModeLabel: 'Modalità Visualizzazione:',
        viewModes: {
          desktop: 'Desktop',
          tablet: 'Tablet',
          mobile: 'Mobile'
        },
        dashboardTitle: 'Dashboard Analytics',
        dashboardSubtitle: 'Panoramica del sistema -',
        quickActionsTitle: 'Azioni Veloci',
        actions: {
          addProduct: 'Nuovo Prodotto',
          manageUsers: 'Gestisci Utenti',
          reports: 'Rapporti'
        },
        userManagementTitle: 'Gestione Utenti',
        reportsTitle: 'Rapporti di Sistema',
        reportsData: {
          activeUsers: 'Utenti Attivi',
          sales: 'Vendite',
          growth: 'Crescita',
          rating: 'Valutazione'
        },
        feedback: {
          productAdded: 'Prodotto aggiunto con successo!',
          userManagementEnabled: 'Gestione utenti abilitata',
          userManagementDisabled: 'Gestione utenti disabilitata',
          reportsEnabled: 'Rapporti abilitati',
          reportsDisabled: 'Rapporti disabilitati'
        }
      },
      angular: {
        title: 'Angular 19+ - Signals, Reactive Forms & Componenti Standalone',
        description: 'Dimostra le potenti funzionalità moderne di Angular: Signals per reattività granulare, Reactive Forms con validazione avanzata e Componenti Standalone per architettura modulare.',
        signalsTitle: 'Signals & Reattività',
        counterLabel: 'Contatore',
        doubleLabel: 'Doppio:',
        squareLabel: 'Quadrato:',
        statusLabel: 'Stato:',
        formsTitle: 'Reactive Forms',
        taskInput: 'Scrivi una nuova attività...',
        taskAdd: 'Aggiungi',
        taskRequired: 'L\'attività è obbligatoria',
        taskMinLength: 'Minimo 3 caratteri',
        priorityLow: 'Bassa',
        priorityMedium: 'Media',
        priorityHigh: 'Alta',
        statsTotal: 'Totale',
        statsPending: 'In Attesa',
        statsCompleted: 'Completate',
        formLabels: {
          email: 'Email',
          password: 'Password',
          confirmPassword: 'Conferma Password'
        },
        formPlaceholders: {
          email: 'tua@email.com',
          password: 'Inserisci la tua password',
          confirmPassword: 'Conferma la tua password'
        },
        formValidation: {
          emailRequired: 'L\'email è obbligatoria',
          emailInvalid: 'Email non valida',
          passwordRequired: 'La password è obbligatoria',
          passwordMinLength: 'Minimo 8 caratteri',
          passwordPattern: 'Deve contenere lettera e numero',
          confirmRequired: 'La conferma è obbligatoria',
          passwordMismatch: 'Le password non corrispondono'
        },
        formSubmit: 'Registrati',
        formClear: 'Cancella',
        formStatus: {
          valid: 'Modulo valido',
          touched: 'Campi toccati',
          dirty: 'Campi sporchi'
        }
      },
      git: {
        title: 'Workflow Git Completo',
        description: 'Dimostra un workflow professionale Git con branching, commit organizzati e integrazione via Pull Request.',
        workflowTitle: 'Flusso di Lavoro'
      },
      vscode: {
        title: 'VS Code - Ambiente di Sviluppo Completo',
        description: 'Esplora le potenti funzionalità di Visual Studio Code: IntelliSense, debugging avanzato, estensioni e integrazione Git.',
        featuresTitle: 'Funzionalità Principali'
      }
    },
    footer: {
      brand: 'Kenyson Oliveira Loureiro',
      tagline: 'Sviluppatore Front-End che crea esperienze digitali eccezionali.',
      links: 'Link Veloci',
      connect: 'Connettiti',
      builtWith: 'Realizzato con Angular & TailwindCSS'
    },
    theme: {
      toggleLight: 'Passa alla Modalità Chiara',
      toggleDark: 'Passa alla Modalità Scura'
    }
  }
};
