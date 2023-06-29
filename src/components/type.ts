export interface iDataAnnouncement {
  announcements: object[];
}

export interface iDataCarPerfil {
  car: any;
  setEditCar: React.Dispatch<React.SetStateAction<boolean>>;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iDataCarViewPage {
  car: any;
  announcementName: string;
}
