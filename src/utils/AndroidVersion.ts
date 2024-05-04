export interface AndroidVersion {
    name: string;
    versionNumber: string;
    api: number;
    systemImage: string;
}

export const ANDROID_VERSIONS: AndroidVersion[] = [
    {
        name: "KitKat",
        versionNumber: "4.4",
        api: 19,
        systemImage: "system-images;android-19;google_apis_playstore;x86_64",
    },
    {
        name: "Lollipop",
        versionNumber: "5.0",
        api: 21,
        systemImage: "system-images;android-21;google_apis_playstore;x86_64",
    },
    {
        name: "Marshmallow",
        versionNumber: "6.0",
        api: 23,
        systemImage: "system-images;android-23;google_apis_playstore;x86_64",
    },
    {
        name: "Nougat",
        versionNumber: "7.0",
        api: 24,
        systemImage: "system-images;android-24;google_apis_playstore;x86_64",
    },
    {
        name: "Oreo",
        versionNumber: "8.0",
        api: 26,
        systemImage: "system-images;android-26;google_apis_playstore;x86_64",
    },
    {
        name: "Pie",
        versionNumber: "9",
        api: 28,
        systemImage: "system-images;android-28;google_apis_playstore;x86_64",
    },
    {
        name: "Q",
        versionNumber: "10",
        api: 29,
        systemImage: "system-images;android-29;google_apis_playstore;x86_64",
    },
    {
        name: "R",
        versionNumber: "11",
        api: 30,
        systemImage: "system-images;android-30;google_apis_playstore;x86_64",
    },
    {
        name: "12",
        versionNumber: "12",
        api: 31,
        systemImage: "system-images;android-31;google_apis_playstore;x86_64",
    },
    {
        name: "12L",
        versionNumber: "12.1",
        api: 32,
        systemImage: "system-images;android-32;google_apis_playstore;x86_64",
    },
    {
        name: "13",
        versionNumber: "13",
        api: 33,
        systemImage: "system-images;android-33;google_apis_playstore;x86_64",
    },
    {
        name: "14",
        versionNumber: "14",
        api: 34,
        systemImage: "system-images;android-34;google_apis_playstore;x86_64",
    },
];
