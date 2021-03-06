﻿namespace GTiHub.Models.EntityModel
{
    #region

    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class UserProjectSec : BaseEntity
    {
        public int Access_Level { get; set; }

        public bool Active_On_Project { get; set; }

        public DateTime Added_Date { get; set; }

        public virtual Project Project { get; set; }

        public int ProjectId { get; set; }

        public virtual User User { get; set; }

        public int UserId { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserProjSecId { get; set; }
    }
}