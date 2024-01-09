export default function Menu() {
    return (
      <div className="py-20 sm:py-28 ">
<div class="boxbig">
    <div className="flex gap-5">
        <ion-icon name="settings-outline"></ion-icon>
        <p className="text-sm font-medium">General</p>
    </div>
    <div class="boxx2">
        <div class="flex gap-5">
            <ion-icon name="people-outline"></ion-icon>
            <p className="text-sm font-medium">Teams</p>
        </div>
        <div className="flex">
            <p class="number1">5</p>
        </div>
    </div>
    <div class="flex gap-5">
        <ion-icon name="browsers-outline"></ion-icon>
        <p className="text-sm font-medium">Billing</p>
    </div>
    <div class="boxx4">
        <div class="flex gap-5">
            <ion-icon name="reader-outline"></ion-icon>
            <p className="text-sm font-medium">Invoices</p>
        </div>
        <div>
            <p class="number2">3</p>
        </div>
    </div>
    <div class="flex gap-5">
        <ion-icon name="person-outline"></ion-icon>
        <p className="text-sm font-medium">Account</p>
    </div>
</div>
      </div>
    );
  }