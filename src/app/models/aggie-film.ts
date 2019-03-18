export interface AggieFilm {
  activity: {
    icon: String;
    actor: {
      id: String;
      objectType: String;
      displayName: String;
      author: {
        id: String;
        displayName: string;
      }
    }
    verb: String;
    title: String;
    object: {
      ucdSrcId: String;
      objectType: String;
      content: String;
      ucdEdusModel: {
        url: String;
        urlDisplayName: String;
      }
    }
    to: {
      groups: Array<String>;
      users: Array<String>;
    }
    ucdEdusMeta: {
      labels: Array<String>;
      authzId: String;
      startDate: String;
      endDate: String;
    }
  }
}
