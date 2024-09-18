import { Routes } from '@angular/router';
import { UpdateContractorComponent } from './Contractor/update-contractor/update-contractor.component';
import { DeleteContractorComponent } from './Contractor/delete-contractor/delete-contractor.component';
import { CreateContractorComponent } from './Contractor/create-contractor/create-contractor.component';
import { ReadContractorComponent } from './Contractor/read-contractor/read-contractor.component';
import { CreateLaborComponent } from './Labor/create-labor/create-labor.component';

export const routes: Routes = [
    { path: 'contractors/update/:id', component: UpdateContractorComponent },
    { path: 'contractors/delete/:id', component: DeleteContractorComponent },
    { path: 'contractors/create', component: CreateContractorComponent },
    { path: 'contractors/read', component: ReadContractorComponent },
    { path: 'labor/create', component: CreateLaborComponent },

    



];
