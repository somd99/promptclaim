import {
  IonContent,
  IonPage,
  IonButton,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonTitle,
  IonLabel,
  IonCard,
  IonList,
  IonItem,
  IonInput,
  IonToast,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./EditAccount.css";
import { Account, ProfileProps } from "./Profile";

const EditAccount: React.FC<ProfileProps> = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [oldPass, setOldPass] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPassword2, setNewPassword2] = useState<string>("");

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line
  }, []);

  const [items, setItems] = useState<Account[]>([]);
  const fetchItems = async () => {
    const data = await fetch(
      "http://ec2-54-169-201-208.ap-southeast-1.compute.amazonaws.com:8001/customer/account/get",
      {
        headers: {
          Authorization: localStorage.token,
        },
      }
    );
    console.log(data);
    const items = await data.json();
    setItems(items.getAccount);
    console.log(items.getAccount);
    const password1: string = items.getAccount[0].password;
    const email1: string = items.getAccount[0].email;
    console.log(password1);
    setOldPass(password1);
  };

  const [items2, setItems2] = useState<Account[]>([]);
  const editData = async () => {
    const data2 = await fetch(
      "http://ec2-54-169-201-208.ap-southeast-1.compute.amazonaws.com:8001/customer/account/edit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.token,
        },
        body: JSON.stringify({
          email: newEmail,
          password: newPassword,
        }),
      }
    );
    console.log(data2);
    const items2 = await data2.json();
    setItems2(items2.getAccount);
    console.log(items2.getAccount);
  };

  function validateForm(password: string) {
    return (
      password === currentPassword &&
      newPassword.length > 7 &&
      newPassword === newPassword2
    );
  }

  const sendNewPass = () => {
    if (validateForm(oldPass)) {
      editData();
      setShowToast1(true);
    } else {
      console.log("bug");
    }
  };

  const onHandleSave = () => {
    sendNewPass();
  };

  return (
    <IonPage>
      <IonContent color="lightbutton">
        <IonHeader class="toolbar">
          <IonToolbar color="theme">
            <IonButton
              color="theme"
              routerLink="/Profile"
              routerDirection="root"
            >
              <IonIcon icon={chevronBackOutline}></IonIcon>
            </IonButton>
            <IonTitle class="title">Edit Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonLabel class="labelacc">Change E-mail</IonLabel>

        <IonCard class="card3">
          <IonList>
            <IonItem>
              <IonLabel class="bold">E-mail</IonLabel>
              {items.map((item) => (
                <IonLabel class="info" position="stacked">
                  {item.email}
                </IonLabel>
              ))}
            </IonItem>
            <IonItem>
              <IonLabel class="bold">New E-mail</IonLabel>
              <IonInput
                class="input-text"
                value={newEmail}
                onIonChange={(e) => setNewEmail(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </IonList>
        </IonCard>
        <IonLabel class="labelacc">Change Password</IonLabel>
        <IonCard>
          <IonList>
            <IonItem>
              <IonLabel class="bold">Current Password</IonLabel>
              <IonInput
                class="input-text"
                required
                type="password"
                value={currentPassword}
                onIonChange={(e) => setCurrentPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel class="bold">New Password</IonLabel>
              <IonInput
                class="input-text"
                required
                type="password"
                value={newPassword}
                onIonChange={(e) => setNewPassword(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel class="bold">Confirm New Password</IonLabel>
              <IonInput
                class="input-text"
                required
                type="password"
                value={newPassword2}
                onIonChange={(e) => setNewPassword2(e.detail.value!)}
              ></IonInput>
            </IonItem>
            <div className="note">* Password must be at least 8 characters</div>
          </IonList>
        </IonCard>
        <IonButton
          class="savebutt"
          strong
          id="saveacc"
          size="large"
          color="theme"
          expand="block"
          routerLink={"/Profile"}
          routerDirection="root"
          onClick={onHandleSave}
        >
          SAVE
        </IonButton>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Your account have been saved."
          duration={200}
          position="middle"
        />
      </IonContent>
    </IonPage>
  );
};
export default EditAccount;
