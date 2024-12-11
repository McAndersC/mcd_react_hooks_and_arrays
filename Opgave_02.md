

```
Følgende Udfordringer.
```

# Opgave Grubler 02

Læs **ALLE TRIN** inden du får igang - så du har et lille overblik over opgaver og måske det former din tankegang i forhold til hvordan du griber det an.

Trin 7. 

* Det skal være muligt at slette en maskine fra listen.

Trin 8.

* Lav en "compact" visning af en maskine.
    * Gør det mulig når man tilføjer `<Machine compactView={true} ...>` af vise Maskine i et "kompakt" view.

    * Kompakt view er en cirkel med rigtig farve, titel og tal.

    * Opret et `<CompactViewList>` Komponent som henter alle maskiner og viser dem i deres "kompakte" udgave.

    * Indsæt komponentet på en side vi kalder `<PrettyMachinePage>` og urlen skal være "/prettymachines" 

* Opret nu endnu en ny side `<MachinesDashboard>` hvor vi både kan se vores `<ClickMachines/>` og `<CompactViewList/>` - ruten skal være `/dashboard`


