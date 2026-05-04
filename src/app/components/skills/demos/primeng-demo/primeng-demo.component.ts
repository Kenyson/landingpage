import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PrimeComponent {
  name: string;
  description: string;
  category: string;
  usage: string;
  props: string[];
}

interface ThemeColor {
  name: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-primeng-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primeng-demo.component.html',
  styleUrls: ['./primeng-demo.component.css']
})
export class PrimengDemoComponent {
  themeColors: ThemeColor[] = [
    {
      name: 'Primary',
      value: '#3b82f6',
      description: 'Cor principal para botões e links'
    },
    {
      name: 'Secondary',
      value: '#8b5cf6',
      description: 'Cor secundária para gradientes'
    },
    {
      name: 'Success',
      value: '#22c55e',
      description: 'Confirmações e estados positivos'
    },
    {
      name: 'Warning',
      value: '#f59e0b',
      description: 'Alertas e avisos'
    },
    {
      name: 'Danger',
      value: '#ef4444',
      description: 'Erros e ações destrutivas'
    },
    {
      name: 'Surface',
      value: '#1a1a1a',
      description: 'Fundo dos componentes'
    },
    {
      name: 'Surface Section',
      value: '#0a0a0a',
      description: 'Fundo de seções internas'
    },
    {
      name: 'Text Primary',
      value: '#e5e5e5',
      description: 'Texto principal'
    },
    {
      name: 'Text Secondary',
      value: '#a3a3a3',
      description: 'Texto secundário'
    }
  ];

  featuredComponents: PrimeComponent[] = [
    {
      name: 'Button (p-button)',
      description: 'Botões versáteis com ícones, loading states e variações de severidade',
      category: 'Button',
      usage: '<p-button label="Get In Touch" severity="primary" size="large"></p-button>',
      props: ['label', 'severity', 'size', 'loading', 'disabled']
    },
    {
      name: 'ProgressBar (p-progressBar)',
      description: 'Barras de progresso customizáveis para mostrar níveis de proficiência',
      category: 'Data Display',
      usage: '<p-progressBar [value]="skillLevel" [showValue]="false" styleClass="custom-progress">',
      props: ['value', 'showValue', 'styleClass', 'mode']
    },
    {
      name: 'Chip (p-chip)',
      description: 'Badges para tecnologias e tags com remoção opcional',
      category: 'Data Display',
      usage: '<p-chip [label]="\'Angular\'" size="small"></p-chip>',
      props: ['label', 'size', 'removable', 'image']
    },
    {
      name: 'Card (p-card)',
      description: 'Containers estruturados com header, body e footer customizáveis',
      category: 'Panel',
      usage: '<p-card styleClass="skill-card"><ng-template pTemplate="header"><h3>Skills</h3></ng-template></p-card>',
      props: ['styleClass', 'header', 'title']
    },
    {
      name: 'Dialog (p-dialog)',
      description: 'Modais responsivos para detalhes expandidos de habilidades',
      category: 'Overlay',
      usage: '<p-dialog [(visible)]="skillDialogVisible" [modal]="true" [style]="{\'width\': \'50rem\'}"></p-dialog>',
      props: ['visible', 'modal', 'style', 'header']
    },
    {
      name: 'Toast (p-toast)',
      description: 'Notificações não-intrusivas para feedback ao usuário',
      category: 'Feedback',
      usage: '<p-toast></p-toast>',
      props: ['key', 'position', 'preventDuplicates']
    }
  ];
}