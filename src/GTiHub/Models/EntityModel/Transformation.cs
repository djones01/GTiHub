namespace GTiHub.Models.EntityModel
{
    #region

    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    #endregion

    public class Transformation : BaseEntity
    {
        public Transformation()
        {
            this.Conditions = new List<Condition>();
        }

        public virtual ICollection<Condition> Conditions { get; set; }

        public string Description { get; set; }

        public virtual Map Map { get; set; }

        public int MapId { get; set; }

        public virtual Rule Rule { get; set; }

        public int RuleId { get; set; }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransformationId { get; set; }
    }
}