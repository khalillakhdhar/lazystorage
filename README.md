# objectif
l'application permettra de s'inscrire s'authentifier
et faire la gestion des achats d'une personne
# sénario:
l'utilisateur va se connecter ou s'inscrire (localstorage)
puis il va passer à un tableau de board connecté dans lequel vous planifer:
-les achats
-les incomes et outcome
-se déconnecté
# modules:
1-auth: contenant les pages s'inscrire et s'authentifier (centrage de contenu) et localstorage avec form module (sans menu)
2- gestion(dashboard): un menu header un footer 2 pages flux achats pagination formModules et localstorage
# classes et services: T.A.F
sous le dossier shared :
dans un dossier classes:
1-interface user:nom,prenom,email,mdp
2 interface achats: titre,description,quantite,prix
3 interface flux: titre, montant , type
dans un dossier services:
créer un service par interfaces
# U.I:
-créer les interface achats et income avec des formulaires permettant d'ajouter un flux ou un achat
