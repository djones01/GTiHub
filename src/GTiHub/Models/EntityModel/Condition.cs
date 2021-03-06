﻿namespace GTiHub.Models.EntityModel
{
    #region

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Condition : BaseEntity
    {
        public string Chain_Operation { get; set; }

        public string Cond_Value { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConditionId { get; set; }

        public string Left_Paren { get; set; }

        public string Operation { get; set; }

        public string Right_Paren { get; set; }

        public int SeqNum { get; set; }

        public virtual SourceField SourceField { get; set; }

        public int SourceFieldId { get; set; }

        public virtual Transformation Transformation { get; set; }

        public int TransformationId { get; set; }
    }
}