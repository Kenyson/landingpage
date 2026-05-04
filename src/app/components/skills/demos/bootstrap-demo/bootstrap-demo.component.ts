import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../translation.pipe';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'app-bootstrap-demo',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent {
  viewMode = signal<ViewMode>('desktop');
  showUserManagement = signal(false);
  showReports = signal(false);
  lastAction = signal<string>('');

  recentProducts = signal([
    { name: 'Smartphone XYZ', price: 'R$ 2.499', status: 'available' },
    { name: 'Notebook Pro', price: 'R$ 4.999', status: 'available' },
    { name: 'Tablet Mini', price: 'R$ 1.299', status: 'unavailable' },
    { name: 'Smartwatch', price: 'R$ 899', status: 'available' }
  ]);

  recentActivities = signal([
    {
      text: 'Novo usuário registrado',
      time: '2 min atrás',
      type: 'user',
      icon: 'pi pi-user-plus'
    },
    {
      text: 'Produto adicionado ao catálogo',
      time: '5 min atrás',
      type: 'product',
      icon: 'pi pi-plus-circle'
    },
    {
      text: 'Sistema atualizado',
      time: '1 hora atrás',
      type: 'system',
      icon: 'pi pi-refresh'
    },
    {
      text: 'Pedido realizado',
      time: '2 horas atrás',
      type: 'product',
      icon: 'pi pi-shopping-cart'
    }
  ]);

  addNewProduct() {
    const newProduct = {
      name: 'Novo Produto Demo',
      price: 'R$ 999',
      status: 'available' as const
    };

    this.recentProducts.update(products => [newProduct, ...products.slice(0, 3)]);
    this.lastAction.set('demos.bootstrap.feedback.productAdded');
    this.showSuccessMessage();
  }

  toggleUserManagement() {
    this.showUserManagement.update(current => !current);
    this.showReports.set(false);
    this.lastAction.set(this.showUserManagement()
      ? 'demos.bootstrap.feedback.userManagementEnabled'
      : 'demos.bootstrap.feedback.userManagementDisabled'
    );
    this.showSuccessMessage();
  }

  toggleReports() {
    this.showReports.update(current => !current);
    this.showUserManagement.set(false);
    this.lastAction.set(this.showReports()
      ? 'demos.bootstrap.feedback.reportsEnabled'
      : 'demos.bootstrap.feedback.reportsDisabled'
    );
    this.showSuccessMessage();
  }

  private showSuccessMessage() {
    // Auto-hide message after 3 seconds
    setTimeout(() => {
      this.lastAction.set('');
    }, 3000);
  }

  setViewMode(mode: ViewMode) {
    this.viewMode.set(mode);
  }

  getContainerClass(): string {
    return this.viewMode();
  }

  getStatsColClass(): string {
    const mode = this.viewMode();
    switch (mode) {
      case 'desktop': return 'col-lg-3 col-md-6 col-12';
      case 'tablet': return 'col-md-6 col-12';
      case 'mobile': return 'col-12';
      default: return 'col-lg-3 col-md-6 col-12';
    }
  }

  getMainColClass(): string {
    const mode = this.viewMode();
    switch (mode) {
      case 'desktop': return 'col-lg-8 col-md-12';
      case 'tablet': return 'col-md-12';
      case 'mobile': return 'col-12';
      default: return 'col-lg-8 col-md-12';
    }
  }

  getSidebarColClass(): string {
    const mode = this.viewMode();
    switch (mode) {
      case 'desktop': return 'col-lg-4 col-md-12';
      case 'tablet': return 'col-md-12';
      case 'mobile': return 'col-12';
      default: return 'col-lg-4 col-md-12';
    }
  }

  getCurrentLayoutInfo(): string {
    const mode = this.viewMode();
    switch (mode) {
      case 'desktop':
        return 'Header: 12 cols | Stats: 3 cols cada | Main: 8 cols | Sidebar: 4 cols';
      case 'tablet':
        return 'Header: 12 cols | Stats: 6 cols cada | Main/Sidebar: 12 cols cada';
      case 'mobile':
        return 'Tudo empilhado: 12 cols cada';
      default:
        return '';
    }
  }
}
