import { FormControl } from '@angular/forms';

export interface TotHousePrice{
    cost: FormControl<number | null>;
    dPayCost: FormControl<number | null>;
    dPayPercent: FormControl<number | null>;
}
